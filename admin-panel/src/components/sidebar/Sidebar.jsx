import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/userSlice";
import { useDispatch} from "react-redux";

const Sidebar = () => {
    const dispatch = useDispatch();
    const handleLogOut = ()=>{
        dispatch(logOut());
    };
    
  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
                <span className="logo">lamaadmin</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to={"/users"} style={{ textDecoration: "none" }}>
                    <li>
                        <PersonOutlineIcon className="icon"/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to={"/products"} style={{ textDecoration: "none" }}>
                    <li>
                        <StoreIcon className="icon"/>
                        <span>Products</span>
                    </li>
                </Link>
                <Link to={"/orders"} style={{ textDecoration: "none" }}>
                    <li>
                        <CreditCardIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                </Link>
                <p className="title">USER</p>
                <Link to="/users/profile" style={{ textDecoration: "none" }}>
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                </Link>
                <li onClick={handleLogOut}>
                    <ExitToAppIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar