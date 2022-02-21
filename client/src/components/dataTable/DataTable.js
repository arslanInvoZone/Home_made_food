import React,{ useEffect} from 'react';
import Styles from './dataTable.module.css'
import Chip from '@mui/material/Chip';
import { Clear } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { mealsList } from '../../actions/menuAction'
import moment from 'moment'
import axios from 'axios'
export default function DataTable() {
  const data = useSelector((state)=>state.menuMeals)
  const {meals} = data
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(mealsList())
  },[dispatch])
  const mealCancelHandler =async (id) =>{
    const status ="CANCELLED"
    await axios.put(`/api/menus/meals/${id}`,
            {id,status},
          );
          dispatch(mealsList())
  }
  return (
    <table>
      <thead>
      <tr>
    <th>Meal</th>
    <th>Date</th>
    <th>Status</th>
  </tr>
      </thead>
  <tbody>
  {meals && meals.map((meal)=>(
    <tr key={meal.name}>
    <td>{meal.name}</td>
    <td>{moment(meal.createdAt).format('DD-MM-YYYY')}</td>
    <td> 
    <Chip
        label={meal.status}
        variant="outlined"
        color='secondary'
      />
      {meal.status !== 'CANCELLED' ?
        (
        <Chip
        icon={<Clear />}
        variant="outlined"
        color='error'
        onClick={()=>mealCancelHandler(meal.id)}
        className={Styles.delete}
      />
      )
      :''
      }
    </td>
  </tr>
  ))}
  </tbody>
</table>
  );
}