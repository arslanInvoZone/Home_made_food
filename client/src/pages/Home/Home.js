import React, { useEffect } from 'react'
import Styles from './home.module.css'
import Layout from '../../components/Layout/Index'
import Card from '../../components/card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { menusListData } from '../../actions/menuAction'

function Home() {
  const dispatch = useDispatch();
  const menusData = useSelector((state)=>state.menusList)
  const {menusList} = menusData
  useEffect(()=>{
    async function fetch() {
      await dispatch(menusListData())
    }
fetch()
  },[dispatch])
  return (
    <Layout>
      <div className={Styles.contentWrapper}>
          {menusList && menusList.map((menu)=>(
            <Card key={menu.uuid} name={menu.menu_name} des={menu.description} imgUrl={menu.image} id={menu.id} sub={menu.subscribed} />
          ))}
      </div>
    </Layout>
  )
}

export default Home
