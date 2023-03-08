import { useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./single.scss";
import {userRequest} from "../../requestMethods";
import { useState, useEffect } from "react";

const Single = () => {
  const location = useLocation();
  const type = location.pathname.split("/")[1];
  const object = location.pathname.split("/");
  const objectId =object[object.length - 1];
  const [data, setData] = useState({});
  const [orderProducts, setOrderProducts] = useState([]);
  useEffect(()=>{
    const getData = async()=>{
      try{
        const res = await userRequest.get(`${type}/find/${objectId}`);
        setData(res.data);
        if(type === "orders")  await setOrderProducts(res.data.products);  
      }catch(err){
      }
    };
    getData();
  },[]);
 
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <div className="top">
            <h1 className="title">Information</h1>
            <div className="item">
              <div className="left">
                <img src={(type === "users") ? data.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif" : (type === "products") ? data.img1 : "https://icons.veryicon.com/png/o/system/crm-android-app-icon/app-icon-sales-order.png"} alt="" className="itemImg" />
                <h1 className="itemTitle">{type === "users" ? data.username : (type === "products") ? data.title : "Order Details"}</h1>
              </div>
              <div className="details">
                  {Object.entries(data).map(item => {
                    if(["password","img","img1", "img2", "__v", "isAdmin", "products"].includes(item[0]) === false ){
                      return (
                        <div className="detailItem" key={item[0]}>
                          <span className="itemKey">{item[0]}:</span>
                          <span className="itemValue">{item[1]}</span>
                        </div>
                      )
                    }
                  }
                )}
                {type === "orders" && 
                <div className="detailItem fullWidth">
                  <span className="itemKey">Products:</span>
                  {orderProducts.map(item =>{
                    return (
                        <span className="itemValue" key={item._id}>
                          <span> <img src={item.img} className="itemImg"/> </span>
                          <span>{item.quantity} pieces</span>
                        </span>
                    )
                  })
                }
                </div>}
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Single;