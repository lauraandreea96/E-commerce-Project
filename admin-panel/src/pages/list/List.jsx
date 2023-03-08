import Datatable from "../../components/datatable/Datatable";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";
import { useLocation } from 'react-router-dom';

const List = ({columns}) => {
  const location = useLocation().pathname.split("/")[1];
  
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Datatable columns={columns} type={location}/>
      </div>
    </div>
  )
}

export default List;