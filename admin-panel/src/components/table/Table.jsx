import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { userRequest } from "../../requestMethods";
import { useState } from "react";
import { useEffect } from "react";

const List = ({type}) => {
    let data;
    const[users, setUsers] = useState([]);
    const [transactions, setTransactions] = useState([]);
    useEffect(()=>{
      const getUsers = async()=>{
        try{
          const res = await userRequest.get("users/?new=true");
          setUsers(res.data);
        }catch(err){
        }
      };
      getUsers();
    },[]);
    useEffect(()=>{
      const getTransactions = async()=>{
        try{
          const res = await userRequest.get("orders");
          setTransactions(res.data);
        }catch(err){
        }
      };
      getTransactions();
    },[]);
    if(type === "users"){
      data = users;
    }else{
      data = transactions;
    };
   
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">{type === "users" ? "User" : "User Id"}</TableCell>
            <TableCell className="tableCell">{type === "users" ? "Email" : "Date"}</TableCell>
            <TableCell className="tableCell">{type === "users" ? "Phone" : "Amount"}</TableCell>
            {type==="transactions" && <TableCell className="tableCell">Status</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row._id} 
            >
              <TableCell className="tableCell">{row._id}</TableCell>
              <TableCell className="tableCell">{type === "users" ? row.username : row.userId}</TableCell>
              <TableCell className="tableCell">{type === "users" ? row.email : row.createdAt.substring(0, 10)}</TableCell>
              <TableCell className="tableCell">{type === "users" ? row.phone : `$${row.amount}`}</TableCell>
              {type==="transactions" && 
              <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List;