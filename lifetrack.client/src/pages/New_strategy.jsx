import './New_strategy.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='window-main'>
        <div className='window'>
          <div className='flex'>
            <div className='circle'></div>
            <div className='name'>
              <h1 className='name_system'>Health</h1>
              <h1 className='name_system'>Tracking</h1>
            </div>
            <div className='doctor'>
                <input className='doctor_button' type='button' value='Криса Т.М.'></input>
            </div>
          </div>
        </div>

        <div className='place_new_strategy'>
            <div className='place_carousel'>
                <div className="app">
                    <Carousel>
                        <Carousel.Item>
                            <div className='carousel_page1'>
                                <h1>Hello</h1>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='carousel_page2'>
                                <h1>World</h1>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <div className='new_strategy_buttons'>
                <div className='new_strategy_button_left'>
                <input className='buttons_new_stategy' type='button' value="Детальний звіт"></input>
                </div>
                <div className='new_strategy_button_right'>
                <input className='buttons_new_stategy' type='button' value="Вихід"></input>
                </div>
            </div>
          
        </div>
      </div>
    )
  };
  
  export default Home;