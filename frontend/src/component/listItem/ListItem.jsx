import './listItem.scss'
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from '@material-ui/icons'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"

const ListItem = ({ item}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const [movie, setMovie] = useState({});
  const movieApi = "/api/movies/"
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`${movieApi}find/${item}`);
        setMovie(res.data);
      } catch (err) {
        console.error(err)
      }
    }
    getMovie();
    
  }, [item])
  return (
    <Link to="/watch" state={{movie: movie}}>
      <div className='listItem'

      >
        <div className="wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          <img src={movie?.img} alt="" />
          {
            isHovered && (
              <>
                <video autoPlay muted loop>
                  <source src={movie.video} type="video/mp4" />
                </video>

                <div className="itemInfo">
                  <div className="icons">
                    <PlayArrow className="icon" />
                    <Add className="icon" />
                    <ThumbUpOutlined className="icon" />
                    <ThumbDownOutlined className="icon" />
                  </div>
                  <div className="itemInfoTop">
                    <span>1 hour 14 mins</span>
                    <span className="limit">+{movie.limit}</span>
                    <span>{movie.year}</span>

                  </div>
                  <div className="desc">
                    {movie.desc}
                  </div>
                  <div className="genre">{movie.genre}</div>
                </div>
              </>
            )
          }

        </div>

      </div>
    </Link>

  )
}

export default ListItem