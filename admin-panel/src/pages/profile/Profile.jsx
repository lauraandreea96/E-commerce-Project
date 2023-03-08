import "./profile.scss"
import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";

const Profile = () => {
    const user = useSelector((state) => state.user.currentUser);
    console.log("this is", user)
    const [file, setFile] = useState(user.img);
    const [info, setInfo] = useState({});
    const handleChange = (e) =>{
        setInfo(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    };
    const handleClick = async (e) =>{
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        try{
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dpp13bpyb/image/upload", data);
            const {url} = uploadRes.data;
            const updateUser = {
                ...info,
                img: url,
            };
            await userRequest.put(`/users/${user._id}`, updateUser);
        }catch(err){
            console.log(err);
        }
    };
    
  return (
    <div className='profile'>
        <Sidebar/>
        <div className="profileContainer">
            <div className="container">
                <div className="left">
                    <img src={file} alt="" className="profileImg" />
                </div>
                <div className="right">
                    <form>
                        <div className="formInput">
                            <label htmlFor="file"> Update Image: <DriveFolderUploadOutlinedIcon className="icon"/></label>
                            <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display: "none"}}/>
                        </div>
                        <div className="formInput">
                            <label>Username</label>
                            <input id="username"  placeholder={user.username} onChange={handleChange}/>
                        </div>
                        <div className="formInput">
                            <label>Email</label>
                            <input id="email"  placeholder={user.email} onChange={handleChange}/>
                        </div>
                        <div className="formInput">
                            <label>Phone</label>
                            <input id="phone"  placeholder={user.phone} onChange={handleChange}/>
                        </div>
                        <div className="formInput">
                            <label>Password</label>
                            <input id="password"  placeholder={user.password} onChange={handleChange}/>
                        </div>
                        <button onClick={handleClick}>Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile