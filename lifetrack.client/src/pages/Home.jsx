import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";
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
    window.location = "/home/" + doctor.id;
  };

  return (
    <div className="window-main">
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
      <div className="place">
        <h1 className="name_doctor">{`${doctor.name} ${doctor.patronymic} ${doctor.surname}`}</h1>

        <div className="ph_but">
          <div className="photo">
            <img src="" alt="Doctor" />
          </div>
          <div className="information">
            <h2>Спеціалізація:</h2>
            <h3>{doctor.speciality}</h3>
            <h2>Електронна пошта:</h2>
            <h3>{doctor.email}</h3>
            <h3 id="inf">Детальна інформація...</h3>
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
