import './Login.css';
//import { useHistory } from 'react-router-dom';


const Login = () => {
  
  //const history = useHistory();

  const handleClick = () => {
    
    history.push('/home');
  };

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
        <div className='work_place'>
          <div className='login_place'>
            <h1 className='log_in'>Log in</h1>
            <div className='write_place'>
              <h3 className='log_pass'>Email:</h3>
              <input className='inputs'></input>
              <h3 className='log_pass'>Password:</h3>
              <input className='inputs'></input>
              <input className='send' type='button' value = "Log in ->" onClick={handleClick}></input>
            </div>
          </div>
        </div>
      </div>
    )
  };
  
  export default Login;


  