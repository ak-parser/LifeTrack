import './Home.css';

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
          </div>
        </div>

        <div className='place'>
          <h1 className='name_doctor'>Лікар: Криса Тарас Михайлович</h1>
          <h3 className='position'>Завідувач кардіологічного відділення</h3>
          <div className='ph_but'>
            <div className='photo'>
              <img src='doctor.jpg' alt='Doctor' />
            </div>

            <div className='button_place'>
              <div className='buttons'>
                <input className='button_menu' type='button' value = "Створити нового пацієнта"></input>
                <input className='button_menu' type='button' value = "Переглянути пацієнтів"></input>
                <input className='button_menu' type='button' value = "Вихід"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
  
  export default Home;