import "./widget.scss"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";

const Widget = ({type}) => {
  let data;
  const [productAmount, setProductAmount] = useState(0);
  const [userAmount, setUserAmount] = useState(0);
  const [orderAmount, setOrderAmount] = useState(0);
  const [incomeAmount, setIncomeAmount] = useState(0);

  useEffect(()=>{
    const productData = async ()=>{
      try{
        const res = await axios.get("http://localhost:5000/api/products/count");
        setProductAmount(res.data);
      }catch(err){
      };
    };
    productData();
  },[]);

  useEffect(()=>{
    const userData = async ()=>{
      try{
        const res = await axios.get("http://localhost:5000/api/users/count");
        setUserAmount(res.data);
      }catch(err){
      };
    };
    userData();
  },[]);

  useEffect(()=>{
  const orderData = async ()=>{
    try{
      const res = await userRequest.get("http://localhost:5000/api/orders");
      setOrderAmount(res.data.length);
      let sum = 0;
      res.data.map(order => sum += order.amount)
      setIncomeAmount(sum);
    }catch(err){
    };
  };
    orderData();
  },[]);
  switch(type){
    case "users":
      data= {
        title: "USERS",
        icon: <PersonOutlinedIcon className="icon" style={{color:"crimson", backgroundColor: "rgba(255, 0, 0, 0.2)"}}/>,
        amount: userAmount
      };
      break;
      case "products":
      data= {
        title: "PRODUCTS",
        icon: <ShoppingCartOutlinedIcon className="icon" style={{color:"goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2)"}}/>,
        amount: productAmount
      };
      break;
      case "orders":
      data= {
        title: "ORDERS",
        icon: <MonetizationOnOutlinedIcon className="icon" style={{color:"green", backgroundColor: "rgba(0, 128, 0, 0.2)"}}/>,
        amount: orderAmount
      };
      break;
      case "earnings":
      data= {
        title: "EARNINGS",
        icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{color:"purple", backgroundColor: "rgba(128, 0, 128, 0.2)"}}/>,
        amount: incomeAmount
      };
      break;
      default:
        break;
  }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{type === "earnings" ? "$" : ""}{data.amount}</span>
            <span className="link">
              <Link to={`/`} style={{ textDecoration: "none", color:"black" }}>
                See all {type}
              </Link>
            </span> 
        </div>
        <div className="right">
            {data.icon}
        </div>
    </div>
  )
}

export default Widget