import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { parseCookies } from 'nookies'
import { baseUrl } from '../../constants/baseUrl'
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom'

const Datatable = ({columns}) => {

    const { token } = parseCookies()

    const location = useLocation()
    const paths = location.pathname.split("/")
    const path = paths[paths.length - 1]

    console.log(path)

    const [data , setData] = useState([])

    useEffect(async() => {  
      const res =await axios.get(`${baseUrl}/${path}`, {
        headers:{
          token:token
      }
    }).then((data)=>{
      console.log(data.data)
      setData(data.data)
    })

    }, [path])

  const handleDelete = async(id) => {
    console.log(`${baseUrl}/hotels/${path==='hotels' ? `find` : ''}/${id}`)
    try {
      await axios.delete(`${baseUrl}/hotels/${path==='hotels' ? `find` : ''}/${id}`,{
        headers:{
          token:token
      }
      }).then((user)=>{

        console.log(user.data)
      })
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {paths}
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row => row._id}
      />
    </div>
  );
};

export default Datatable;
