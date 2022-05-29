import './app.scss'
import React, { useContext } from 'react'
import Home from './pages/home/Home'
import Watch from './pages/watch/Watch'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import {AuthContext} from './context/authContext/AuthContext'
import Account from './pages/account/Account'
import Footer from './component/footer/Footer'
const App = () => {
  const {user} = useContext(AuthContext)
  return (
    <>
     <Router>
      <Routes>
        <Route exact path="/" element={
          user ? <Home /> : <Navigate to="/login" />

        }>
        </Route>
        <Route path='/register' element={
          !user ? <Register /> : <Navigate to="/" />
        }>
        </Route>
        <Route path='/login' element={
          !user ? <Login /> : <Navigate to="/" />
        }>
        </Route>
        {
          user && (
            <>
              <Route path="/movies" element={<Home type="movie" />} />
              <Route path="/series" element={<Home type="series" />} />
              <Route path="/watch" element={<Watch />} />
              <Route path="/account" element={<Account />} />
            </>
          )
        }

      </Routes>
    </Router>
    <Footer/>
    </>
   
    
  )
}

export default App;
