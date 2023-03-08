import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";
import Widget from "../../components/widget/Widget";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="users" />
          <Widget type="products" />
          <Widget type="orders" />
          <Widget type="earnings" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Users</div>
          <Table type="users"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table type="transactions"/>
        </div>
      </div>
    </div>
  )
}

export default Home;