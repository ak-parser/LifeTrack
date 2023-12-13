import * as React from "react";
import { api } from "../api";
import { Link } from "react-router-dom";
import "./Patients.css";
import { getUserId, setUserId } from "./reducer";

class Patients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      patients: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  fetchPatients = async () => {
    const id = window.location.toString().split("/")[4];
    try {
      const response = await api.get(
        `patient/doctor/${id}?search=${this.state.search}`
      );

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      this.setState({ patients: response.data });
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  componentDidMount() {
    this.fetchPatients();
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSearch(event) {
    event.preventDefault();
    this.fetchPatients();
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

  handleSignOut = () => {
    setUserId(null);
    window.location = "/";
  };

  render() {
    const { patients, search } = this.state;

    // const filteredPatients = patients.filter((item) => {
    //   return (
    //     item.last_name.toLowerCase().includes(search.toLowerCase()) ||
    //     item.first_name.toLowerCase().includes(search.toLowerCase()) ||
    //     item.middle_name.toLowerCase().includes(search.toLowerCase()) ||
    //     item.diagnosisValue.toLowerCase().includes(search.toLowerCase()) ||
    //     item.phone_number.toLowerCase().includes(search.toLowerCase()) ||
    //     item.email.toLowerCase().includes(search.toLowerCase())
    //   );
    // });

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
            <h2 className="links" onClick={this.handleSignOut}>
              Вийти
            </h2>
          </div>
        </div>

        <div className="pl">
          <div className="head-place">
            <h3 className="heads" id="patients">
              Пацієнти
            </h3>
            <h3 className="heads" id="patients">
              Соловій Х.О.
            </h3>
          </div>
          <div className="search">
            <input
              className="search-input"
              type="text"
              name="search"
              value={search}
              onChange={this.handleSearchChange}
              placeholder="Пошук"
            />
            <button className="search-btn" onClick={this.handleSearch}>
              Пошук
            </button>
          </div>
          <div>
            <table className="patient">
              <thead>
                <tr>
                  <th className="pat_tr">ID</th>
                  <th className="pat_tr">ПІБ</th>
                  <th className="pat_tr">Діагноз</th>
                  <th className="pat_tr">Контакти</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Link to={`/patient/${item.id}`}>{item.id}</Link>
                    </td>
                    <td>
                      {item.name + " " + item.patronymic + " " + item.surname}
                    </td>
                    <td>{item.diagnosisValue.name}</td>
                    <td>{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Patients;
