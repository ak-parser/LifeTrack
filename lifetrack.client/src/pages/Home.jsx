import { useEffect, useState } from "react";
import doctorImg from "../assets/doctor.jpg";
import icon from "../assets/icon.png";
import { useParams } from "react-router-dom";
import { api } from "../api";
import { getUserId, setUserId } from "./reducer";
import "./Home.css";

const Home = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({
    id,
    name: "",
    surname: "",
    patronymic: "",
    speciality: "",
    email: "",
  });

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await api.get(`doctor/${id}`);

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        setDoctor({ ...response.data });
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };
    fetchDoctor();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDoctor({
      ...doctor,
      [name]: value,
    });
  };

  const handlePatients = (event) => {
    event.preventDefault();
    window.location = "/patients/" + doctor.id;
  };

  const handleProfile = (event) => {
    event.preventDefault();
    window.location = "/home/" + getUserId();
  };

  const handleSignOut = () => {
    setUserId(null);
    window.location = "/";
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
      <div className="place">
        <h1 className="name_doctor">{`${doctor.name} ${doctor.patronymic} ${doctor.surname}`}</h1>

        <div className="ph_but">
          <div className="photo">
            <img src={doctorImg} alt="doctor" />
          </div>
          <div className="information">
            <h3>Спеціалізація: {doctor.speciality}</h3>
            <h3>Електронна пошта: {doctor.email}</h3>
            <h4 id="inf">Детальна інформація...</h4>
          </div>
        </div>
        <div className="button_place">
          <div className="buttons">
            <input
              className="button_menu"
              type="button"
              value="Мої записи"
            ></input>
            <input
              className="button_menu"
              type="button"
              value="Пацієнти"
              onClick={handlePatients}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
