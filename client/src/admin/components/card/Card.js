import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Alert, Button, CardActionArea, CardActions, Snackbar } from '@mui/material'
import Styles from './card.module.css'
import { useSelector,useDispatch } from 'react-redux'
import {  useState } from 'react'
import { deleteMenu } from '../../../actions/menuAction'
export default function MultiActionAreaCard({name,des,imgUrl,id,del}) {
  const [open,setOpen] = useState(false);
  
  const deletedMenuData = useSelector((state)=>state.deletedMenu)
  const {message} = deletedMenuData
  const dispatch = useDispatch()
  const deleteMenuHandler = async() =>{
    setOpen(true)
    await dispatch(deleteMenu(id))
    setTimeout(()=>{
      del(true)
    },1000)
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
        <Button onClick={deleteMenuHandler} variant='contained' className={Styles.btn}>
          Delete
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {message} 
        </Alert>
    </Snackbar>
      </CardActions>
    </Card>
  )
}
