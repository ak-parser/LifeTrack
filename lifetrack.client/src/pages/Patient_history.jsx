
import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './Patient_history.css';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Patient_history = () => {
    const handleProfile = (event) => {
        event.preventDefault();
        window.location = "/home";
    };

    const handleExit = () => {
        window.history.back();
    };


    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const [datasets, setDatasets] = useState([
            {
                label: 'Dataset 1',
                data: [150, 200, 350, 450, 300, 250, 180],
                borderColor: 'red',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            checked: true,
            },
            {
                label: 'Dataset 2',
                data: [300, 400, 250, 200, 350, 280, 320],
                borderColor: 'blue',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                checked: true,
            },
            {
                label: 'Dataset 3',
                data: [650, 900, 450, 800, 550, 280, 820],
                borderColor: 'green',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                checked: true,
            },
    ]);

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
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Зміна показників',
            },
        },
    };

    return (
        <div className='window-main'>
            <div className="window">
                <div className="flex">
                    <div className="circle"></div>
                    <div className="name">
                        <h1 className="name_system">Health</h1>
                        <h1 className="name_system">Tracking</h1>
                    </div>
                    <h2 className="links" onClick={handleProfile}>
                        Профіль
                    </h2>
                    <h2 className="links">Сервіси</h2>
                    <h2 className="links">Контакти</h2>
                    <h2 className="links">Про нас</h2>
                    <h2 className="links">Вийти</h2>
                </div>
            </div>
            <div className='place_patient_history'>
                <h1 className='history_reports'>Статистика</h1>
                <div className='place-ckeck-graph'>
                    
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
                    <input className="history_reports_out_button" type='button' value="Назад" onClick={handleExit}></input>
                </div>
               
                    
               
            </div>
        </div>
    );
};

export default Patient_history;