import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import NewProduct from "./pages/newProduct/NewProduct";
import { productInputs, userInputs } from "./formSource";
import { useSelector } from "react-redux";
import { productColumns, orderColumns, userColumns } from "./datatablesource";
import Profile from "./pages/profile/Profile";


function App() {
  const user = useSelector((state) => state.user.currentUser);
  const ProtectedRoute = ({children})=>{
    if(!user){
      return <Navigate to="/login" />
    }
    return children;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<ProtectedRoute> <Home/> </ProtectedRoute>}/>
            <Route path="login" element={user ? ( <Navigate replace to="/" /> ) : ( <Login /> )}/>
            <Route path="users">
              <Route index element={<ProtectedRoute><List columns={userColumns}/></ProtectedRoute>}/>
              <Route path=":userId" element={<ProtectedRoute> <Single/> </ProtectedRoute>}/>
              <Route path="new" element={<ProtectedRoute> <New inputs={userInputs} title="Add New User"/> </ProtectedRoute>}/>
              <Route path="profile" element={<ProtectedRoute> <Profile/> </ProtectedRoute>}/>
            </Route>
            <Route path="products">
              <Route index element={<ProtectedRoute> <List columns={productColumns}/> </ProtectedRoute>}/>
              <Route path=":productId" element={<ProtectedRoute> <Single/> </ProtectedRoute>}/>
              <Route path="new" element={<ProtectedRoute> <NewProduct inputs={productInputs} title="Add New Product"/> </ProtectedRoute>}/>
            </Route>
            <Route path="orders">
              <Route index element={<ProtectedRoute> <List columns={orderColumns}/> </ProtectedRoute>}/>
              <Route path=":orderId" element={<ProtectedRoute> <Single/> </ProtectedRoute>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
