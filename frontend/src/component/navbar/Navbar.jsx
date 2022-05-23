import './navbar.scss';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/authContext/AuthContext';
import { logout } from '../../context/authContext/AuthAction';
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const {dispatch} = useContext(AuthContext);
  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }
  return (
    <div className={isScroll ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="" />
          <Link to="/" className='link'>
            <span>Home</span>
          </Link>

          <Link to="/series" className='link'>
            <span className='navbarLink'>Series</span>
          </Link>
          <Link to="/movies" className='link'>
            <span className='navbarLink'>Movie</span>
          </Link>

          <span>TV</span>
        </div>
        <div className="right">
          <Search className='icon' />
          <span>KID</span>
          <Notifications className='icon' />
          <img src="https://i.pinimg.com/550x/2d/39/c7/2d39c7b2287252c50372d21de96b1813.jpg" alt="" />
          <div className="profile">
            <ArrowDropDown className='icon' />
            <div className="option">
              <span className="setting">Setting</span>
              <span className="logout" onClick={()=> dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar