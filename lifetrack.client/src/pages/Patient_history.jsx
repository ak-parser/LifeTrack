import { useEffect, useState } from "react";
import { Chart as ChartJS, TimeScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "chartjs-adapter-date-fns";
import { uk } from "date-fns/locale";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { getUserId, setUserId } from "./reducer";
import { getRandomColor } from "./helpers";
import { api } from "../api";
import "./Patient_history.css";
import icon from "../assets/icon.png";

ChartJS.register(TimeScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Patient_history = () => {
    const { id } = useParams();
    const [labels, setLabels] = useState([]);
    const [datasets, setDatasets] = useState([]);

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const response = await api.get(`patient/${id}`);

                if (response.status !== 200) {
                    throw new Error("Network response was not ok");
                }

                const { healthMetricsCollection } = response.data;
                setLabels(
                    healthMetricsCollection
                        .flatMap((metrics) => metrics.healthMetricsValuesCollection)
                        .map((value) => value.measurementDateTime)
                );

                setDatasets(
                    healthMetricsCollection.map((metrics) => ({
                        label: metrics.name,
                        data: metrics.healthMetricsValuesCollection
                            .sort((a, b) => a.measurementDateTime > b.measurementDateTime)
                            .map((v) => v.value),
                        borderColor: getRandomColor(),
                        backgroundColor: getRandomColor(),
                        checked: true,
                    }))
                );
            } catch (error) {
                console.error("There has been a problem with your fetch operation:", error);
            }
        };
        fetchPatient();
    }, [id]);

    const handleProfile = (event) => {
        event.preventDefault();
        window.location = "/home/" + getUserId();
    };

    const handleSignOut = () => {
        setUserId(null);
        window.location = "/";
    };

    const handleExit = () => {
        window.history.back();
    };

    const toggleDataset = (index) => {
        const updatedDatasets = [...datasets];
        updatedDatasets[index].checked = !updatedDatasets[index].checked;
        setDatasets(updatedDatasets);
    };

    const visibleDatasets = datasets.filter((dataset) => dataset.checked);

    const data = {
        labels,
        datasets: visibleDatasets.map((dataset) => ({
            ...dataset,
            data: dataset.data,
        })),
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                type: "time",
                adapters: {
                    date: {
                        locale: uk,
                    },
                },
            },
        },
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Зміна показників",
            },
        },
    };

    return (
        <div className="window-main">
            <div className="window">
                <div className="flex">
                    <img src={icon} alt="logo" className="circle" />
                    <div className="name">
                        <h1 className="name_system">Health</h1>
                        <h1 className="name_system">Track</h1>
                    </div>
                    <h2 className="links" onClick={handleProfile}>
                        Профіль
                    </h2>
                    <h2 className="links">Сервіси</h2>
                    <h2 className="links">Контакти</h2>
                    <h2 className="links">Про нас</h2>
                    <h2 className="links" onClick={handleSignOut}>
                        Вийти
                    </h2>
                </div>
            </div>
            <div className="place_patient_history">
                <h1 className="history_reports">Статистика</h1>
                <div className="place-ckeck-graph">
                    <div className="chart-container">
                        <Line data={data} options={options} />
                    </div>
                    <div className="checkbox-container">
                        {datasets.map((dataset, index) => (
                            <div key={index} className="checkbox-item">
                                <input
                                    type="checkbox"
                                    checked={dataset.checked}
                                    onChange={() => toggleDataset(index)}
                                />
                                <label>{dataset.label}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="button-place">
                    <input
                        className="history_reports_out_button"
                        type="button"
                        value="Назад"
                        onClick={handleExit}
                    ></input>
                </div>
            </div>
        </div>
    );
};

export default Patient_history;
