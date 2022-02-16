import React from 'react'
import Layout from '../../components/Layout/Index'
import MenuLists from '../../components/menuLists/MenuLists'
const Menu = () => {
  return (
    <Layout>
        <h1 style={{marginTop:'20px'}}>Menu Detials</h1>
        <MenuLists/>
    </Layout>
  )
}

export default Menu