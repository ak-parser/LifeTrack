import './Patient_history.css';

const Patient_history = () => {

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

        <div className='place_patient_history'>
            <h1 className='history_reports'>Історія звітів</h1>

            <table className='history_reports_table'>
                <tbody>
                    <tr className='history_reports_table_tr'>
                        <td><button><img src='pdf.png'></img></button><h4>result_20_11_2022.pdf</h4></td>
                        <td><button><img src='pdf.png'></img></button><h4>result_20_11_2023.pdf</h4></td>
                    </tr>
                    <tr className='history_reports_table_tr'>
                        <td><button><img src='pdf.png'></img></button><h4>result_20_11_2022.pdf</h4></td>
                        <td><button><img src='pdf.png'></img></button><h4>result_20_11_2023.pdf</h4></td>
                    </tr>
                    <tr className='history_reports_table_tr'>
                        <td><button><img src='pdf.png'></img></button><h4>result_20_11_2022.pdf</h4></td>
                        <td><button><img src='pdf.png'></img></button><h4>result_20_11_2023.pdf</h4></td>
                    </tr>
                    <tr className='history_reports_table_tr'>
                        <td><button><img src='pdf.png'></img></button><h4>result_20_11_2022.pdf</h4></td>
                        <td><button><img src='pdf.png'></img></button><h4>result_20_11_2023.pdf</h4></td>
                    </tr>
                    <tr className='history_reports_table_tr'>
                        <td><button><img src='pdf.png'></img></button><h4>result_20_11_2022.pdf</h4></td>
                        <td><button><img src='pdf.png'></img></button><h4>result_20_11_2023.pdf</h4></td>
                    </tr>
                </tbody>
            </table>
            <div className='history_reports_click_out'>
                <input className="history_reports_out_button"type='button' value="Вихід"></input>
            </div>
        </div>
      </div>
    )
  };
  
  export default Patient_history;