import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';  
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PaymentsIcon from '@mui/icons-material/Payments';
import LogoutIcon from '@mui/icons-material/Logout';
import { Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import {logout} from '../../../actions/userAction'
import { useDispatch } from 'react-redux';
function Index({children}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler=()=>{
    dispatch(logout())
    navigate('/')
  }
  return (
    <div style={{display:'flex'}}>
    <Box
      sx={{ width:250,height:900}}
      style={{backgroundColor:'tomato',color:'white'}}
      role="presentation"
    >
      <Box  role="presentation">
        <List>
          <ListItem>
          <h1>Home Food</h1>
          </ListItem>
        </List>
      </Box>
      <Divider style={{color:'white'}}/>
      <List>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
          <ListItem button>
            <ListItemIcon>
               <RestaurantMenuIcon style={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Menus"/>
          </ListItem>
          </Link>
          <Link to={'/admin/subscribers'} style={{textDecoration:'none',color:'white'}}>
          <ListItem button>
            <ListItemIcon>
               <PeopleIcon style={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Subscribers"/>
          </ListItem>
          </Link>
          <Link to={'/admin/meals'} style={{textDecoration:'none',color:'white'}}>
          <ListItem button>
            <ListItemIcon>
               <RestaurantIcon style={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Meals"/>
          </ListItem>
          </Link>
          <Link to={'/admin/payments'} style={{textDecoration:'none',color:'white'}}>
          <ListItem button>
            <ListItemIcon>
               <PaymentsIcon style={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText  primary="Payments"/>
          </ListItem>
          </Link>
          <ListItem button onClick={logoutHandler}>
            <ListItemIcon>
               <LogoutIcon style={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Logout"/>
          </ListItem>
      </List>
      <Divider />
    </Box>
    <Container style={{padding:'40px'}}>
      {children}
    </Container>
    </div>
  )
}

export default Index