import './Patient.css';

const Patient = () => {

  const name = "Alex";
  const surname = "Fedak"
  const father = "Vasylovich"
  const date_of_birth = "27.03.1998";
  const diagnothe = "Гіпертензія";
  const conclusion_result_str = "Стан здоров'я погіршився";
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

        <div className='place_patient'>
            <div className='info_pat'>
              <h1 className='name_patient'>Пацієнт</h1>
              <div className='flex_pat_info'>
                <div className='info_pat_left'>
                  <h3 className='info_pat_str'>Ім'я: {name}</h3>
                  <h3 className='info_pat_str'>Прізвище: {surname}</h3>
                  <h3 className='info_pat_str'>По-батькові: {father}</h3>
                </div>
                <div className='info_pat_right'>
                  <h3 className='info_pat_str'>Дата народження: {date_of_birth}</h3>
                  <h3 className='info_pat_str'>Діагноз: {diagnothe}</h3>
                  <h3 className='info_pat_str'>Стратегія лікування: <input className='strategy_button' type='button' value="Відкрити"></input></h3>
                </div>
              </div>
            </div>
            <div className='info_data'>
              <h1 className='last_indexes'>Останні показники</h1>
              <div>
                <table className='indexes_table'>
                  <thead>
                    <tr>
                      <th className='indexes_table_th'>Назва показника</th>
                      <th className='indexes_table_th'>Результат</th>
                      <th className='indexes_table_th'>Норма</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='indexes_table_td'>gtgtg</td>
                      <td className='indexes_table_td'>rgtgtt</td>
                      <td className='indexes_table_td'>gtgtgt</td>
                    </tr>
                  </tbody>
                </table>

                <table className='conclusion_table'>
                  <thead>
                    <tr>
                      <th className='conclusion_table_th'>Висновок</th>
                      <th className='conclusion_table_th'><h3 className='conclusion_result'>{conclusion_result_str}</h3></th>
                    </tr>
                  </thead>
                </table>

                <div className='flex_button_history'>
                  <input className='button_history' type='button' value="Історія показників"></input>
                  <input className='button_history' type='button' value="Детальний звіт"></input>
                  <input className='button_history' type='button' value="Генерація стратегії лікування"></input>
                </div>

              </div>
            </div>
        </div>
      </div>
    )
  };
  
  export default Patient;