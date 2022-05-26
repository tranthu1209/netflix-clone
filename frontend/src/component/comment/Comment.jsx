import './comment.scss'
import axios from 'axios';
import { memo, useEffect, useState } from 'react'

const Comment = ({comment}) => {
    const [user, setUser] = useState({});
    useEffect(()=>{
        const getUser = async()=>{
            try{
                const res = await axios.get(`http://localhost:3001/api/users/find/${comment.userId}`);
                setUser(res.data);
            }catch(err){
                console.error(err);
            }
        }
        getUser();
        
    },[comment]);
    console.log(comment)
    return (
        <div className="comment">
            <img src={user.profilePic} alt="" />
            <div>
                <p>{user.username}</p>
                <p className='commentContent'>{comment.content}</p>
            </div>
        </div>
    )
}

export default memo(Comment);