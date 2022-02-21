import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/index'
function Payments() {
  const [status, setStatus] = useState(false)
  const acceptHandler =()=>{
    setStatus(true)
  }
  const declineHandler = () =>{
    setStatus(false)
  }
  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Payments</h2>
      </div>
      <TableContainer style={{ display: 'flex', justifyContent: 'center' }}>
        <Table
          sx={{ minWidth: 650 }}
          size="small"
          aria-label="a dense table"
          style={{ width: 600 }}
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ width: '300px' }} align="center">
                User Name
              </TableCell>
              <TableCell style={{ width: '300px' }} align="center">
                Payment Proof
              </TableCell>
              <TableCell style={{ width: '300px' }} align="center">
                status
              </TableCell>
              <TableCell style={{ width: '300px' }} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                raza
              </TableCell>
              <TableCell align="center">
                <Link to="#">Download</Link>
              </TableCell>
              <TableCell align="center">
                <Chip
                  label={status ? 'Accepted':'Declined'}
                  variant="outlined"
                  color="error"
                />
              </TableCell>
              <TableCell align="center" style={{width:500}}>
                <Chip
                  label={'Accepted'}
                  variant="outlined"
                  color="success"
                  onClick={acceptHandler}
                />
                &nbsp;
                <Chip
                  label={'Declined'}
                  variant="outlined"
                  color="error"
                  onClick={declineHandler}
                />
              </TableCell>
            </TableRow>
            {/* {meals && meals.map((meal) => (
            
          ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  )
}

export default Payments
