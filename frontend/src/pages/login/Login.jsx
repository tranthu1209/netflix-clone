import { useContext, useState } from 'react'
import './login.scss'
import { AuthContext } from '../../context/authContext/AuthContext';
import { login } from '../../context/authContext/apiCalls'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch, error, isFetching } = useContext(AuthContext);
    const [err, setErr] = useState('');
    
    const handleLogin = async(e) => {
        e.preventDefault();
        login({email, password}, dispatch); 
        setEmail('');
        setPassword('');
    }
    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="" />
                </div>

            </div>
            <div className="container">
                <form action="">
                    <h2>Sign In</h2>
                    <div className={`errorBox ${error? 'show' : ''}`}>
                        <span className='errorMessage'>{error?.response?.data}</span>
                    </div>
                    
                    <input type="email" placeholder='Enter your email adress' value={email} onChange={e => setEmail(e.target.value)} autoFocus />
                    <input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
                    
                    <button className={`loginButton ${isFetching? 'disabled' : ''}`} onClick={handleLogin} disabled={isFetching}>Sign In</button>
                    <span>New to Netflix?
                        <Link to="/register" className='link registerLink'> Sign up now</Link>
                    </span>
                    <small>
                        This page is protect by Google reCAPTCHA to ensure you're not a bot.
                        <b> Learn more</b>.
                    </small>
                </form>


            </div>
        </div>
    )
}

export default Login