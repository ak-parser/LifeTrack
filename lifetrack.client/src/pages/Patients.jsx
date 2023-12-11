import './Patients.css';

const Patients = () => {
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

        <div className='pl'>
            <h1 className='name_patient'>Пацієнти</h1>
            <div>
                <table className='patient'>
                    <thead>
                        <tr>
                            <th className='pat_tr'>ID</th>
                            <th className='pat_tr'>Прізвище Ім'я По-батькові</th>
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
    )
  };
  
  export default Patients;