import './watch.scss'
import { ArrowBack } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'
const Watch = () => {
  const location = useLocation();
  const movie = location.state.movie
  return (
    <div className='watch'>
       <Link to="/">
       <div className="back">
         
          <ArrowBack className='icon' />
          <span>Home</span>
        </div>
       </Link>
        
      <video src={movie.video} muted autoPlay controls></video>
    </div>
  )
}

export default Watch