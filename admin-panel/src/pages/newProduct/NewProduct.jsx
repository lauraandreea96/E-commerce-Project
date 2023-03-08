import "./newProduct.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import {userRequest} from "../../requestMethods";

const NewProduct = ({inputs, title}) => {

  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [categories, setCategories] = useState([]);
  const handleChange = e =>{
    setInfo(prev =>({...prev, [e.target.id]:e.target.value}));
  };
  const handleSelect= e=>{
    const value = Array.from(e.target.selectedOptions, (option) => option.value);
    setCategories(value);
  };
  const handleClick = async e =>{
    e.preventDefault();
    try{
      const list = await Promise.all(Object.values(files).map(async file => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dpp13bpyb/image/upload", data);
        const {url} = uploadRes.data;
        return url;
      }));
      const newProduct = {
        ...info, 
        categories,
        img1: list[0],
        img2: list[1],
      }
      await userRequest.post("http://localhost:5000/api/products", newProduct);
    }catch{
    }
  };

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src= {files ? URL.createObjectURL(files[0]) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file"> Image: <DriveFolderUploadOutlinedIcon className="icon"/></label>
                <input type="file" id="file" multiple onChange={e=>setFiles(e.target.files)} style={{display: "none"}}/>
              </div>
              {inputs.map(input => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleChange}/>
              </div>
              ))}
              <div className="formInput">
                  <label>Nmber of Players</label>
                  <select id="players" onChange={handleChange}>
                    <option value= "1" >1</option>   
                    <option value="2">2</option>
                    <option value="2-4">2-4</option>
                    <option value="4-6">4-6</option> 
                    <option value="6-8">6-8</option>      
                  </select>
              </div>

              <div className="selectCategory">
                  <label>Categories</label>
                  <select id="categories" multiple onChange={handleSelect}>
                      <option key="family" value = "family"> Family </option>
                      <option key="strategy" value = "strategy"> Strategy </option>
                      <option key="party" value = "party"> Party </option>
                      <option key="cards" value = "cards"> Cards </option>  
                      <option key="kids" value = "kids"> Kids </option>  
                      <option key="logic" value = "logic"> Logic </option>
                      <option key="story" value = "story"> Story </option>
                      <option key="educational" value = "educational"> Educational </option>
                      <option key="thematic" value = "thematic"> Thematic </option>    
                  </select>
              </div>

              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default NewProduct;