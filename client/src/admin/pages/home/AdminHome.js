import { Button,  TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/index'
import Card from '../../components/card/Card'
import { useDispatch, useSelector } from 'react-redux';
import { addMenu, menusListData } from '../../../actions/menuAction';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Styles from './home.module.css'
function AdminHome() {
  const dispatch = useDispatch();
  const menusData = useSelector((state)=>state.menusList)
  const {menusList} = menusData
  const [del,setDel] = useState(false);
  useEffect(()=>{
    async function fetch() {
      await dispatch(menusListData())
    }
fetch()
  },[dispatch,del])
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [menuName,setMenuName] = useState('')
  const [des,setDes] = useState('')
  const [img,setImg] = useState('')
  const onChangeHandlerName =(e)=>{
    setMenuName(e.target.value)
  }
  const onChangeHandlerDes =(e)=>{
    setDes(e.target.value)
  }
  const onChangeHandlerImg =(e)=>{
    setImg(e.target.value)
  }
  const handleClose = () => {
    setOpen(false)
    const data = {
      menu_name:menuName,
      description:des,
      image:img
    }
    const {menu_name,description,image} = data
    dispatch(addMenu(menu_name,description,image))
    dispatch(menusListData())
  };
  return (
    <Layout>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <h2>Manage The Menus</h2>
      <Button onClick={handleOpen} variant='container' style={{backgroundColor:'tomato',color:'white'}} size="large">Add New Menu</Button>
      </div>
      <div className={Styles.contentWrapper}>
      {menusList && menusList.map((menu)=>(
            <Card key={menu.uuid} name={menu.menu_name} des={menu.description} imgUrl={menu.image} id={menu.id} del={setDel} />
      ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Menu
          </Typography>
          <br></br>
          <TextField id="outlined-basic" onChange={(e)=>onChangeHandlerName(e)} label="Name" variant="outlined" fullWidth margin='dense' />
          <TextField id="outlined-basic" onChange={(e)=>onChangeHandlerDes(e)} label="Description" variant="outlined" fullWidth  margin='dense'/>
          <TextField id="outlined-basic" onChange={(e)=>onChangeHandlerImg(e)} label="URL" variant="outlined" fullWidth  margin='dense'/>
          <Button onClick={handleClose} variant='container' style={{backgroundColor:'tomato',color:'white'}} size="large">Add</Button>
        </Box>
      </Modal>
    </Layout>
  )
}

export default AdminHome