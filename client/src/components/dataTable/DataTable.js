import * as React from 'react';
import Styles from './dataTable.module.css'
import Chip from '@mui/material/Chip';
import { Clear } from '@mui/icons-material';
export default function DataTable() {
  return (
    <table>
  <tr>
    <th>Meal</th>
    <th>Date</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>Meal 1</td>
    <td>16-02-2022</td>
    <td> 
    <Chip
        label='PENDING'
        variant="outlined"
        color='secondary'
      />
      <Chip
        icon={<Clear />}
        variant="outlined"
        color='error'
        className={Styles.delete}
      />
    </td>
  </tr>
  
</table>
  );
}