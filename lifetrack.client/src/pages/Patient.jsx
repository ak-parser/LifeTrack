import * as React from 'react';
import './Patient.css';

class Patient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            father: '',
            date_of_birth: '',
            diagnothe: '',
            conclusion_result_str: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
    }

    componentDidMount() 
    {
        const userId = this.props.match.params.userId;

        fetch('https://example.com/data?userId=${userId}')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            const { firstName, lastName, fatherName, dateofirth, Diagnothe, ConclusionResult_str} = data;
            this.state.name = firstName;
            this.state.surname = lastName;
            this.state.father = fatherName;
            this.state.date_of_birth = dateofirth;
            this.state.diagnothe = Diagnothe;
            this.state.conclusion_result_str = ConclusionResult_str;
          })
          .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
          }
        );

        const { first_name, last_name, middle_name } = this.state;
        const pip = `${first_name} ${last_name} ${middle_name}`.trim();
        this.setState({ pip });

        this.state.email = userId;
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