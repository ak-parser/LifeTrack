import * as React from 'react';
import './Home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            middle_name: '',
            pip: first_name + " " + last_name + " " + middle_name,
            position: '',
            email: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePatients = this.handlePatients.bind(this);
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
            const { firstName, lastName, fatherName, post } = data;
            this.state.first_name = firstName;
            this.state.last_name = lastName;
            this.state.middle_name = fatherName;
            this.state.position = post;
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

    handlePatients = (event) => {

        event.preventDefault();
        window.location = '/patients/' + this.state.email;
    }

    handleProfile = (event) => {

        event.preventDefault();
        window.location = '/home/' + this.state.email;
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
                    <h1 className='name_doctor'>{this.state.pip}</h1>

                    <div className='ph_but'>
                        <div className='photo'>
                            <img src='' alt='Doctor' />
                        </div>
                        <div className='information'>
                            <h2>Спеціалізація:</h2>
                            <h3>{this.state.position}</h3>
                            <h2>Електронна пошта:</h2>
                            <h3>{this.state.email}</h3>
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