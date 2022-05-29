import { CameraAlt } from '@material-ui/icons'
import { useContext, useState } from 'react'
import Navbar from '../../component/navbar/Navbar'
import { AuthContext } from '../../context/authContext/AuthContext'
import './account.scss'

const Account = () => {
    const { user } = useContext(AuthContext);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [imgURL, setImgURL] = useState(user.profilePic);

    const handlePreviewAvatar = (e)=>{
        const file = e.target.files[0];
        setImgURL(URL.createObjectURL(file))
    }
    const handelUpdate = (e)=>{
        e.preventDefault();
        
    }
    return (
        <div>
            <Navbar />
            <div className='account'>
                <h1>Personal page</h1>
                <ul>
                    <li className='active'>Account and Setting</li>
                    <li>Service purchased</li>
                    <li>Watching list</li>
                    <li>Liked list</li>
                </ul>
                <div className="content">
                    <h3>Account information</h3>
                    <div>
                        <div className="group">
                            <label htmlFor="username">Username</label>
                            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        </div>
                        <div className="group">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="group">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="profilePic">
                        <img src={imgURL} alt="" />
                        <div className="icon">
                        <CameraAlt/>
                        </div>
                        <input type="file" onChange={handlePreviewAvatar} />
                        
                    </div>
                    <button onClick={handelUpdate}>Update</button>
                </div>
                
            </div>

        </div>
    )
}

export default Account