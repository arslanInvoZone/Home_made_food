import React,{useEffect} from 'react'
import Layout from '../../components/Layout/index'
import {useSelector,useDispatch} from 'react-redux'
import {Button,TableContainer,Table,TableHead,TableRow,TableCell,TableBody} from '@mui/material'
import {mealsList} from '../../../actions/menuAction' 
import * as XLSX from 'xlsx'
function Meals() {
  const data = useSelector((state)=>state.menuMeals)
  const {meals} = data

  const dispatch = useDispatch()
  useEffect(()=>{
    async function fetch(){
    await dispatch(mealsList())
  }
    fetch()
  },[dispatch])
  const  downloadToExcelSheet = () =>{
    const workSheet = XLSX.utils.json_to_sheet(meals)
    const workBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workBook,workSheet,'Meals To Deliver')
    //buffer
     XLSX.write(workBook,{bookType:'xlsx',type:'buffer'})
    //Binary String
     XLSX.write(workBook,{bookType:'xlsx',type:'binary'})
     //download
     XLSX.writeFile(workBook,'Meals_to_Deliver.xlsx')
  }
  return (
    <Layout>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <h2>Meals To Deliver</h2>
      <Button onClick={downloadToExcelSheet} variant='container' style={{backgroundColor:'tomato',color:'white'}} size="large">Export CSV</Button>
      </div>
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
    </Layout>
  )
}

export default Meals