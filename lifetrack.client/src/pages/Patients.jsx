import * as React from 'react';
import './Patients.css';

class Patients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            patients: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
        //this.handleSearch = this.handleSearch.bind(this);
    }

    //все закоментоване - для функції пошуку
    //refreshList() {
    //    fetch("" + this.state.search)
    //        .then(response => response.json())
    //        .then(data => {
    //            this.setState({ patinents: data });
    //        });
    //}

    //componentDidMount() {
    //    this.refreshList();
    //}

    //componentDidUpdate() {
    //    this.refreshList();
    //}

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
                            onChange={this.handleChange}
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
                                <tr>
                                    <td className='pat_td'>#00001</td>
                                    <td className='pat_td'>Теравський Олексій Володимирович</td>
                                    <td className='pat_td'>Гіпертензія</td>
                                    <td className='pat_td'>тел: 097-420-41-41 Email: teravskiyolex@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }
  }
  
  export default Patients;