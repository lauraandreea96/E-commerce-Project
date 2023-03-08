import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid'
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

const Datatable = ({type, columns}) => {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const[data, setData] = useState([]);
    useEffect(()=>{
        const Getdata = async ()=>{
            try{
            const res = await userRequest.get(`http://localhost:5000/api/${path}`);
            setData(res.data);
            }catch(err){
            };
        };
        Getdata();
    },[data]);
    const handleDelete = async (id) =>{
        try{
            await userRequest.delete(`/${path}/${id}`);
        } 
        catch(err){}
        setData(data.filter((item)=> item._id !== id));
    };
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params)=>{
                return (
                    <div className="cellAction">
                        <Link to={`/${type}/${params.row._id}`} style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton" onClick={()=>handleDelete(params.row._id, params.row.hotelId)}>Delete</div>
                    </div>
                )
            }
        }
    ];

  return (
    <div className="datatable">
        <div className="datatableTitle">
            See all {type}
            {type !== "orders" &&
                <Link to={`/${type}/new`} style={{ textDecoration: "none" }} className="link">
                    Add New
                </Link>
            }
        </div>
         <DataGrid
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row => row._id}
        />
    </div>
  )
}

export default Datatable