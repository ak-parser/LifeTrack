import * as React from 'react';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePatients = this.handlePatients.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handlePatients = (event) => {

        event.preventDefault();
        window.location = '/patients';
    }

    handleProfile = (event) => {

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
                        <h2 className='links' onClick={this.handleProfile}>Профіль</h2>
                        <h2 className='links'>Сервіси</h2>
                        <h2 className='links'>Контакти</h2>
                        <h2 className='links'>Про нас</h2>
                        <h2 className='links'>Вийти</h2>

                    </div>
                </div>
                <div className='place'>
                    <h1 className='name_doctor'>Соловій Христина Олексіївна</h1>

                    <div className='ph_but'>
                        <div className='photo'>
                            <img src='' alt='Doctor' />
                        </div>
                        <div className='information'>
                            <h2>Спеціалізація:</h2>
                            <h3>Кардіолог</h3>
                            <h2>Електронна пошта:</h2>
                            <h3>soloviy@mail.com</h3>
                            <h3 id='inf'>Детальна інформація...</h3>
                        </div>
                    </div>
                    <div className='button_place'>
                        <div className='buttons'>
                            <input className='button_menu' type='button' value="Мої записи"></input>
                            <input className='button_menu' type='button' value="Пацієнти" onClick={this.handlePatients}></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default Home;