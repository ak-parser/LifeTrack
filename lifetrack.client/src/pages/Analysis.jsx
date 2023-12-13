import { useState } from "react";
import { getUserId, setUserId } from "./reducer";
import { getData } from "./helpers";
import "./Analysis.css";
import icon from "../assets/icon.png";

const Analysis = () => {
    const [bloodPressure, setBloodPressure] = useState(getData());
    const [cholesterol, setCholesterol] = useState(getData());
    const [bmi, setBmi] = useState(getData());
    const [bloodSugar, setBloodSugar] = useState(getData());
    const [heartRate, setHeartRate] = useState(getData());

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
            <div className="place_analysis">
                <h1 className="head-name">Аналіз</h1>
                <div className="result-text">
                    <h4>
                        <span className="indicator-name">Кров’яний тиск - </span> {bloodPressure}
                    </h4>
                    <h4>
                        <span className="indicator-name">Коефіцієнт холестерину - </span> {cholesterol}
                    </h4>
                    <h4>
                        <span className="indicator-name">ІМТ - </span> {bmi}
                    </h4>
                    <h4>
                        <span className="indicator-name">Рівень цукру в крові - </span> {bloodSugar}
                    </h4>
                    <h4>
                        <span className="indicator-name">Пульс - </span> {heartRate}
                    </h4>
                </div>

                <div className="button-place">
                    <input className="exit-btn" type="button" value="Назад" onClick={handleExit}></input>
                </div>
            </div>
        </div>
    );
};
export default Analysis;
