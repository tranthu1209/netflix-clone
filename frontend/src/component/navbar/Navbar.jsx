import './navbar.scss';
import { AccountCircleOutlined, ArrowDropDown, Notifications, PowerSettingsNewOutlined, Search } from '@material-ui/icons'
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/authContext/AuthContext';
import { logout } from '../../context/authContext/AuthAction';
import SearchBox from '../listSearch/SearchBox';
const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const [isScroll, setIsScroll] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const [clicked, setClicked] = useState(false);
  const wrapperRef = useRef();
  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }
  const handleSearch = () => {
    setClicked(true);

  }

  return (
    <div className={isScroll ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <Link to='/' className='link'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="" />
          </Link>

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
          <div className='search' ref={wrapperRef}>
            <Search className='icon' onClick={handleSearch} />
            {
              clicked && (
                <SearchBox wrapperRef={wrapperRef} setClicked={setClicked} />
              )
            }


          </div>

          <span>KID</span>
          <Notifications className='icon' />
          <img className='avatar' src={user.profilePic} alt="" />
          <div className="profile">
            <ArrowDropDown className='icon' />
            <div className="option">
              <p className='username'>{user.username}</p>

              <Link to="/account" className='link'>
                <p>
                  <AccountCircleOutlined />
                  <span className="setting">Account and Setting</span>
                </p>
              </Link>


              <p className="logout"
                onClick={() => {
                  dispatch(logout());
                  navigate('/');
                }}>
                <PowerSettingsNewOutlined />
                <span >Logout</span>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar