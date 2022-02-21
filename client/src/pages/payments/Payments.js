import { Button, Divider, Input, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { mealsList } from '../../actions/menuAction';
import Styles from './payments.module.css'
import Layout from '../../components/Layout/Index'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { invoices } from '../../actions/userAction';
function Payments() {
  const data = useSelector((state)=>state.menuMeals)
  const {meals} = data
  const invoicesData = useSelector((state)=>state.userInvoices)
  const {userInvoices} = invoicesData
  const dispatch = useDispatch()
  useEffect(()=>{
    async function fetch(){
    await dispatch(mealsList())
    await dispatch(invoices())
  }
    fetch()
  },[dispatch])
  const columns =[
    {title:"Menu",field:'menu'},
    {title:"Total Meals",field:'total_meals'},
    {title:"Total Amount",field:'total_amount'},
    {title:"Status",field:'status'},
  ]
  const downloadPdf = () =>{
const doc = new jsPDF()
doc.text("Meals Invoice Details",20,10)
doc.autoTable({
  columns:columns.map(col=>({...col,dataKey:col.field})),
  body:userInvoices
})
doc.save('invoice.pdf')
  }
  return (
    <Layout>
    <TableContainer  style={{display:'flex',justifyContent:'center'}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" style={{width:600}}>
        <TableHead>
          <TableRow>
            <TableCell style={{width:'300px'}} align="center">Name</TableCell>
            <TableCell style={{width:'300px'}} align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meals && meals.map((meal) => (
            <TableRow
              key={meal.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='center'>
                {meal.name}
              </TableCell>
              <TableCell align="center">{meal.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br></br>
    <Divider light/>
    <br></br>
    <TableContainer  style={{display:'flex',justifyContent:'center'}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" style={{width:600}}>
        <TableHead>
          <TableRow>
            {columns.map((col)=>(
              <TableCell style={{width:'300px'}} align="center" key={col.field}>{col.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
              key={1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='center'>
              {userInvoices && userInvoices[0].menu}
              </TableCell>
              <TableCell align="center">{userInvoices && userInvoices[0].total_meals}</TableCell>
              <TableCell align="center">{userInvoices && userInvoices[0].total_amount}</TableCell>
              <TableCell align="center">{userInvoices && userInvoices[0].status}</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>  
    </TableContainer>
    <br></br>
    <Divider/>
    <br></br>
    <div style={{textAlign:'center'}}>
    <h4>Download Invoice as PDF</h4>
    <Button variant='contained' onClick ={downloadPdf} style={{backgroundColor:'tomato',marginTop:'5px'}} size="small">Download</Button>
    </div>
    <br></br>
    <div style={{textAlign:'center'}}>
    <h4>Upload Payment Proof</h4>
    <br></br>
    <Input type="file" size="small" style={{color:'tomato',marginLeft:'80px'}} disableUnderline/>
    </div>
    <br></br>
    </Layout>
  )
}

export default Payments