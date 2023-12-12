import * as React from 'react';
import './Login.css';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {

        event.preventDefault();
        window.location = '/home';
    }

    render() {
        return (
            <div className='window-main'>
                <div className='window'>
                    <div className='flex'>
                        <div className='circle'></div>
                        <div className='name'>
                            <h1 className='name_system'>Health</h1>
                            <h1 className='name_system'>Tracking</h1>
                        </div>
                    </div>

                </div>
                <div className='work_place'>
                    <div className='login_place'>
                        <div className='write_place'>
                            <h3 className='log_pass'>Email</h3>
                            <input className='inputs' placeholder="Enter your email"></input>
                            <h3 className='log_pass'>Password</h3>
                            <input className='inputs' type="password" placeholder="Enter yor password"></input>
                            <h4 className='link-password'>Forgot password?</h4>
                            <input className='send' type='button' value="Log in" onClick={this.handleSubmit}></input>
                            <h4 className='link-signup'>Sign up</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  
  export default Login;


  