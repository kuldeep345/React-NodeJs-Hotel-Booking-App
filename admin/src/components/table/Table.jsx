import React from 'react'
import './table.scss'
import Tablee from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Table = () => {

  
      
      const rows = [
        {
            id:2357741,
            product:'Razer Blade 15',
            img:'https://www.bhphotovideo.com/images/images1000x1000/razer_rz09_03018e52_r3u1_15_6_blade_gaming_laptop_1521046.jpg',
            customer:'Jane Smith',
            date:'1 March',
            amount:920,
            method:'Online',
            status:"Approved"
        },
        {
            id:2345433,
            product:"ASUS ROG Strix",
            img:'https://www.gadgetvoize.com/wp-content/uploads/2018/08/Asus-5.png',
            customer:'Harold Carol',
            date:'1 March',
            amount:2000,
            method:'Online',
            status:'Pending'
        }
      ];
      

  return (
    <div className="table">
         <TableContainer component={Paper}>
      <Tablee sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell" align="left">
                <div className="cellWrapper">
                    <img src={row.img} alt="" className='image'/>
                    {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell" align="left">{row.customer}</TableCell>
              <TableCell className="tableCell" align="left">{row.date}</TableCell>
              <TableCell className="tableCell" align="left">{row.amount}</TableCell>
              <TableCell className="tableCell" align="left">{row.method}</TableCell>
              <TableCell className="tableCell" align="left">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Tablee>
    </TableContainer>
    </div>
  )
}

export default Table