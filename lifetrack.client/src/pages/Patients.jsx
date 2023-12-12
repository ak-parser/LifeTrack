import * as React from 'react';
import './Patients.css';

class Patients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            patients: "",
            data: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
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
                
                this.setState({ data });
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            }
        );

        this.state.email = userId;
    }

    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    };

    handleSearch(event) {
        event.preventDefault();
        this.setState({ comment: event.target.search.value })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleProfile = (event) => {

        event.preventDefault();
        window.location = '/home' + this.state.email;
    }

    render() {

        const { data, search } = this.state;

        const filteredData = data.filter(item => {
            return (
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.middle_name.toLowerCase().includes(search.toLowerCase()) ||
                item.diagnosis.toLowerCase().includes(search.toLowerCase()) ||
                item.phone_number.toLowerCase().includes(search.toLowerCase()) ||
                item.email.toLowerCase().includes(search.toLowerCase())
            );
        });

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

                <div className='pl'>
                    <div className="head-place">
                        <h3 className='heads' id="patients">Пацієнти</h3>
                        <h3 className='heads' id="patients">Соловій Х.О.</h3>
                    </div>
                    <div className='search'>
                        <input className='search-input'
                            type="text"
                            name="search"
                            value={this.state.search}
                            onChange={this.handleSearchChange}
                            placeholder="Пошук"
                        />
                        <button className='search-btn' onClick={this.handleSearch}>Пошук</button>
                    </div>
                    <div>
                        <table className='patient'>
                            <thead>
                                <tr>
                                    <th className='pat_tr'>ID</th>
                                    <th className='pat_tr'>ПІБ</th>
                                    <th className='pat_tr'>Діагноз</th>
                                    <th className='pat_tr'>Контакти</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <Link to={`/patient/${item.id}`}>{item.id}</Link>
                                        </td>
                                        <td>{item.first_name + " " + item.last_name + " " + item.middle_name}</td>
                                        <td>{item.diagnosis}</td>
                                        <td>{item.phone_number + " " + item.email}</td>
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