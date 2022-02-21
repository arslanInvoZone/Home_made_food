import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Alert, Button, CardActionArea, CardActions, Snackbar } from '@mui/material'
import Styles from './card.module.css'
import { useSelector,useDispatch } from 'react-redux'
import {subscribedMenu} from '../../actions/userAction'
export default function MultiActionAreaCard({name,des,imgUrl,id,sub}) {
  const [open,setOpen] = useState(false);
  const subscribedData = useSelector((state)=>state.userSubMenu)
  const {message} = subscribedData
  const dispatch = useDispatch()
  const [subscribe,setSubscribe] = useState(sub)

  const subcribeMenuHandler = async() =>{
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const {user} = userInfo
    if(user.admin===false){
      setOpen(true)
      await dispatch(subscribedMenu(user.id,id))
      setSubscribe(true)
    }
    
    
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {des}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={Styles.btnContainer}>
        <Button disabled={subscribe} onClick={subcribeMenuHandler} variant='contained' className={Styles.btn}>
          Subscribe
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {message} 
        </Alert>
    </Snackbar>
      </CardActions>
    </Card>
  )
}
