import * as React from "react";
import { api } from "../api";
import { getUserId, setUserId } from "./reducer";
import "./Patient.css";
import icon from "../assets/icon.png";

class Patient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            patronymic: "",
            birthDate: "",
            diagnosis: "",
            healthMetricsCollection: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
    }

    fetchPatient = async () => {
        const id = window.location.toString().split("/")[4];
        try {
            const response = await api.get(`patient/${id}`);

            if (response.status !== 200) {
                throw new Error("Network response was not ok");
            }

            this.setState({
                ...response.data,
                diagnosis: response.data.diagnosisValue.name,
            });
        } catch (error) {
            console.error("There has been a problem with your fetch operation:", error);
        }
    };

    componentDidMount() {
        this.fetchPatient();
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleProfile = (event) => {
        event.preventDefault();
        window.location = "/home/" + getUserId();
    };

    handleGraph = (event) => {
        event.preventDefault();
        const id = window.location.toString().split("/")[4];
        window.location = "/patient_history/" + id;
    };

    handleAnalysis = (event) => {
        event.preventDefault();
        window.location = "/analysis";
    };

    handleSignOut = () => {
        setUserId(null);
        window.location = "/";
    };

    render() {
        return (
            <div className="window-main">
                <div className="window">
                    <div className="flex">
                        <img src={icon} alt="logo" className="circle" />
                        <div className="name">
                            <h1 className="name_system">Health</h1>
                            <h1 className="name_system">Track</h1>
                        </div>
                        <h2 className="links" onClick={this.handleProfile}>
                            Профіль
                        </h2>
                        <h2 className="links">Сервіси</h2>
                        <h2 className="links">Контакти</h2>
                        <h2 className="links">Про нас</h2>
                        <h2 className="links" onClick={this.handleSignOut}>
                            Вийти
                        </h2>
                    </div>
                </div>

                <div className="place_patient">
                    <div className="info_pat">
                        <h3 className="name_patient">Пацієнт</h3>
                        <div className="flex_pat_info">
                            <div className="info_pat_left">
                                <h3 className="info_pat_str">Ім`я: {this.state.name}</h3>
                                <h3 className="info_pat_str">Прізвище: {this.state.surname}</h3>
                                <h3 className="info_pat_str">По-батькові: {this.state.patronymic}</h3>
                            </div>
                            <div className="info_pat_right">
                                <h3 className="info_pat_str">
                                    Дата народження: {new Date(this.state.birthDate).toLocaleDateString("ua-UA")}
                                </h3>
                                <h3 className="info_pat_str">Діагноз: {this.state.diagnosis}</h3>
                                <h3 className="info_pat_str" id="strategy">
                                    Стратегія лікування
                                </h3>
                            </div>
                        </div>
                        <table className="patient">
                            <thead>
                                <tr>
                                    <th className="pat_tr">Тип показнику</th>
                                    <th className="pat_tr">Значення</th>
                                    <th className="pat_tr">Дата заміру</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.healthMetricsCollection.map((item, index) => {
                                    const { value, measurementDateTime } = item.healthMetricsValuesCollection.reduce(
                                        (prev, curr) =>
                                            prev.measurementDateTime < curr.measurementDateTime ? prev : curr
                                    );

                                    return (
                                        <tr key={index} className="pat_td">
                                            <td>{item.name}</td>
                                            <td>{value}</td>
                                            <td>{new Date(measurementDateTime).toLocaleDateString("ua-UA")}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="info_data">
                        <div className="flex_button_history">
                            <input
                                onClick={this.handleGraph}
                                className="button_history"
                                type="button"
                                value="Статистика показників"
                            ></input>
                            <input
                                onClick={this.handleAnalysis}
                                className="button_history"
                                type="button"
                                value="Аналіз останніх показників"
                            ></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Patient;
