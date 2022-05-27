import './navbar.scss';
import { AccountCircleOutlined, ArrowDropDown, Notifications, PowerSettingsNewOutlined, Search } from '@material-ui/icons'
import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/authContext/AuthContext';
import { logout } from '../../context/authContext/AuthAction';
import axios from 'axios'
import ListSearch from '../listSearch/ListSearch';
const Navbar = () => {
  const { user } = useContext(AuthContext)
  const [isScroll, setIsScroll] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const [input, setInput] = useState('')
  const inputRef = useRef();
  const [clicked, setClicked] = useState(false);
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
          <img className='logon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="" />
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
          <div className='search'>
            <Search className='icon' onClick={handleSearch} />
            {
              clicked && (
                <div className='searchContainer'>
                  <div className='searchBar'>
                    <input type="text" name='input' placeholder='Enter movie name ...' ref={inputRef} autoFocus
                      onChange={e => setInput(e.target.value)}
                      onBlur={() => { setClicked(false) }}
                    />
                    <Search className='icon' />
                  </div>
                  <ListSearch input={input} />
                </div>
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


              <p className="logout" onClick={() => dispatch(logout())}>
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