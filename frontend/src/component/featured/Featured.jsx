import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import axios from '../../api/axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './featured.scss'

const Feature = ({ type, setGenre }) => {
  const [content, setContent] = useState({});
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`);
        setContent(res.data[0]);
      } catch (err) {
        console.error(err);
      }
    }
    getRandomContent();
  }, [type])
  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type === 'movie' ? 'Movie' : 'Series'}</span>
          <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
            <option value="">Genre</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="anime">Anime</option>
            <option value="romantic">Comedy</option>
            <option value="romantic">Romantic</option>
            <option value="thriller">Thriller</option>
            <option value="horror">Horror</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.titleImg} alt="" />
        <span className="desc">
          {content.desc}
        </span>
        <div className="buttons">

          <Link to="/watch" state={{ movie: content }} className="link">
            <button className='play'>
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>

          <button className="more">
            <InfoOutlined />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Feature