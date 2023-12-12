import * as React from 'react';
import './Patient.css';

class Patient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Alex",
            surname: "Fedak",
            father: "Vasylovich",
            date_of_birth: "27.03.1998",
            diagnothe: "Гіпертензія",
            conclusion_result_str: "Стан здоров'я погіршився"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
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

                <div className='place_patient'>
                    <div className='info_pat'>
                        <h3 className='name_patient'>Пацієнт</h3>
                        <div className='flex_pat_info'>
                            <div className='info_pat_left'>
                                <h3 className='info_pat_str'>Ім'я: {this.state.name}</h3>
                                <h3 className='info_pat_str'>Прізвище: {this.state.surname}</h3>
                                <h3 className='info_pat_str'>По-батькові: {this.state.father}</h3>
                            </div>
                            <div className='info_pat_right'>
                                <h3 className='info_pat_str'>Дата народження: {this.state.date_of_birth}</h3>
                                <h3 className='info_pat_str'>Діагноз: {this.state.diagnothe}</h3>
                                <h3 className='info_pat_str' id='strategy'>Стратегія лікування</h3>
                            </div>
                        </div>
                    </div>
                    <div className='info_data'>
                        <div className='flex_button_history'>
                                <input className='button_history' type='button' value="Історія показників"></input>
                                <input className='button_history' type='button' value="Аналіз останніх показників"></input>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default Patient;