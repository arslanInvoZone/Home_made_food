import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import Layout from '../../components/Layout/index'
import {useDispatch,useSelector} from 'react-redux'
import { subscribersList } from '../../../actions/menuAction'
function Subscribers() {
    const dispatch = useDispatch()
    const subscribersData = useSelector((state)=>state.subscribersInfo)
    const {subscribers} = subscribersData
    useEffect(()=>{
        async function fetch(){
            await dispatch(subscribersList())
        }
        fetch()
    },[dispatch])
  return (
    <Layout>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <h2>Subscribers</h2>
      </div>
      <TableContainer  style={{display:'flex',justifyContent:'center'}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" style={{width:600}}>
        <TableHead>
          <TableRow>
            <TableCell style={{width:'300px'}} align="center">Name</TableCell>
            <TableCell style={{width:'300px'}} align="center">Menu</TableCell>
            <TableCell style={{width:'300px'}} align="center">Package Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscribers && subscribers.map((sub) => (
            <TableRow
            style={{ display:sub.admin && 'none' }}
              key={sub.uuid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row" align='center'>
                {sub.name}
              </TableCell>
            
              
              <TableCell align="center">{sub.menus.map((menu)=> menu.menu_name).join(', ')}</TableCell>
              <TableCell align="center" style={{ display:sub.admin && !sub.menus ?'none':'block' }}>Weakly</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Layout>
  )
}

export default Subscribers