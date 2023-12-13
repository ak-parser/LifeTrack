import * as React from "react";
import { api } from "../api";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      const response = await api.post("/auth/signin", { email, password });

      if (response.status !== 200) {
        throw new Error("Помилка входу. Неправильний email або пароль");
      }

      window.location.href = "/home/" + response.data;
    } catch (error) {
      this.setState({ error: error.message });
    }
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
          </div>
        </div>
        <div className="work_place">
          <div className="login_place">
            <div className="write_place">
              <h3 className="log_pass">Email</h3>
              <input
                value={this.state.email}
                onChange={this.handleInputChange}
                className="inputs"
                placeholder="Enter your email"
              ></input>
              <h3 className="log_pass">Password</h3>
              <input
                className="inputs"
                type="password"
                placeholder="Enter yor password"
              ></input>
              <h4 className="link-password">Forgot password?</h4>
              <input
                className="send"
                type="button"
                value="Log in"
                onClick={this.handleSubmit}
              ></input>
              <h4 className="link-signup">Sign up</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
