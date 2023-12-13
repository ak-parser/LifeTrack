import * as React from "react";
import { api } from "../api";
import "./Patient.css";

class Patient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      patronymic: "",
      birthDate: "",
      diagnosis: "",
      conclusion_result_str: "",
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
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
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
    window.location = "/home";
  };

  render() {
    return (
      <div className="window-main">
        <div className="window">
          <div className="flex">
            <div className="circle"></div>
            <div className="name">
              <h1 className="name_system">Health</h1>
              <h1 className="name_system">Tracking</h1>
            </div>
            <h2 className="links" onClick={this.handleProfile}>
              Профіль
            </h2>
            <h2 className="links">Сервіси</h2>
            <h2 className="links">Контакти</h2>
            <h2 className="links">Про нас</h2>
            <h2 className="links">Вийти</h2>
          </div>
        </div>

        <div className="place_patient">
          <div className="info_pat">
            <h3 className="name_patient">Пацієнт</h3>
            <div className="flex_pat_info">
              <div className="info_pat_left">
                <h3 className="info_pat_str">Ім`я: {this.state.name}</h3>
                <h3 className="info_pat_str">Прізвище: {this.state.surname}</h3>
                <h3 className="info_pat_str">
                  По-батькові: {this.state.patronymic}
                </h3>
              </div>
              <div className="info_pat_right">
                <h3 className="info_pat_str">
                  Дата народження: {this.state.birthDate}
                </h3>
                <h3 className="info_pat_str">
                  Діагноз: {this.state.diagnosis}
                </h3>
                <h3 className="info_pat_str" id="strategy">
                  Стратегія лікування
                </h3>
              </div>
            </div>
          </div>
          <div className="info_data">
            <div className="flex_button_history">
              <input
                className="button_history"
                type="button"
                value="Історія показників"
              ></input>
              <input
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
