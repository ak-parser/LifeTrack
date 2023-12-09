import './Strategy.css';

const Strategy = () => {

    const conclusion_result_str_strategy = "Стан здоров'я погіршився";

    return (
        <div className='window-main_strategy'>
            <div className='window_strategy'>
                <h1 className='name_strategy'>Стратегія лікування</h1>
                <div className='place_text_strategy'>
                    <h3>1. Зміни в стилі життя</h3>
                    <p>Фізична активність: Регулярні вправи можуть допомогти погіршити артеріальний тиск. Рекомендується підтримувати аеробні вправи, такі як ходьба, плавання, велосипед або біг, протягом 30-60 хвилин щодня.</p>
                    <p>Здорова дієта: Обмежте споживання натрію (солі), збільште споживання фруктів, овочів, повних зерен, нежирних молочних продуктів та маложирних білків.</p>
                    <p>Відмова від шкідливих звичок: Припиніть куріння та обмежте споживання алкоголю.</p>
                    <h3>2. Препарати</h3>
                    <p>Гідрохлортіазид - 15 мг. один раз на день</p>
                    <p>Метопролол - 30 мг. двічі на день</p>
                    <p>Еналаприл - 2,5 мг.  на день</p>
                    <p>Лозартан - 40 мг. на день</p>
                    <h3 className='conclusion_result_strategy'>{conclusion_result_str_strategy}</h3>
                    <div className='out_stategy'>
                        <input className='out_stategy_button' type='button' value="Вихід"></input>
                    </div>
                </div>
            </div>
        </div>
    )
  };
  
  export default Strategy;