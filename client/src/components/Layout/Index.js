import React, { useState } from 'react'
import Styles from './style.module.css'
import {
  AppBar,
  Toolbar,
  Menu,
  Button,
  MenuItem,
  Typography,
  Container,
  Box,
  IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from '../../actions/userAction'
function Index({children }) {
  const pages = [
    { name: 'Menus', link: '/' },
    { name: 'Meals', link: '/menus/meals' },
    { name: 'Payments', link: '/payments' },
    { name: 'About Us', link: '/aboutus' },
  ]
  const user = useSelector((state)=>state.userLogin)
  const {userInfo} = user
  const dispatch = useDispatch()
  const [anchorElNav, setAnchorElNav] = useState(null)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const logoutHandler=()=>{
    dispatch(logout())
  }
  return (
    <>
      <AppBar position="static" className={Styles.appBar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                Home Food
              </Typography>
            </Link>
            {userInfo && userInfo.user.admin ? " " :(
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <Link
                    key={page.name}
                    to={userInfo?page.link:'/login'}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            )}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {userInfo && userInfo.user.admin ? " " : pages.map((page) => (
                <Link
                  key={page.name}
                  to={userInfo?page.link:'/login'}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>
            {userInfo ? (
              <>
                <Button color="inherit">{userInfo.user.name}</Button>
                <Button color="inherit" onClick={logoutHandler}>Log Out</Button>
                {userInfo.user.admin?(
                  <Link
                  to="/admin"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Button color="inherit" >Admin DashBoard</Button>
                </Link>
                ):
                ('')
                }   
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Button color="inherit">Log In</Button>
                </Link>
                <Link
                  to="/signup"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Button color="inherit">Sign Up</Button>
                </Link>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Container>{children}</Container>
      <footer className={Styles.footer}>Copy right | InvoZone</footer>
    </>
  )
}

export default Index
