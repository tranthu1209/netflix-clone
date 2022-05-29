import './watch.scss'
import { ArrowBack, Send } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import axios from 'axios'
import Comment from '../../component/comment/Comment';
import Footer from '../../component/footer/Footer';
const Watch = () => {
  const location = useLocation();
  const movie = location.state.movie;
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const inputRef = useRef();
  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios.get(`/api/comments?movieId=${movie._id}`);
        setComments(res.data);
      } catch (err) {
        console.error(err);
      }

    }
    getComments();
  }, []);


  const handleSend = (e) => {
    e.preventDefault();
    const sendComment = async () => {
      const movieId = movie._id;
      const userId = user._id;
      const content = inputRef.current.value;
      try {
        const res = await axios.post('/api/comments/', { movieId, userId, content });
        console.log(res.data);
        setComments(prev => [...prev, res.data]);
        inputRef.current.value = '';
        inputRef.current.focus();
      } catch (err) {
        console.error(err)
      }
    }
    sendComment();
  }

  console.log(comments)
  return (
    <div className='watch'>
      <Link to="/">
        <div className="back">
          <ArrowBack className='icon' />
          <span>Home</span>
        </div>
      </Link>

      <video src={movie.video} muted autoPlay controls></video>
      <div className="container">
        <h1>{movie.title}</h1>
        <span>{movie.desc}</span>
      </div>
      <div className="container">
        <span>Comment</span>
        <div className="userComment">
          <img src={user.profilePic} alt="" />
          <input type="text" placeholder='Add your comment ...' ref={inputRef}

          />
          <button className="send" onClick={handleSend}>
            <Send />
          </button>

        </div>
        <div className="commentList">
          {

            comments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map(comment => {
                return (
                  <Comment key={comment._id} comment={comment} />
                )
              })
          }

        </div>
      </div>
      
    </div>
  )
}

export default Watch