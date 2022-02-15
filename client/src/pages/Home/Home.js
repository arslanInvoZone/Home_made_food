import React from 'react'
import Styles from './home.module.css'
import Layout from '../../components/Layout/Index'
import Card from '../../components/card/Card'

function Home() {
  return (
    <Layout>
      <div className={Styles.contentWrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  )
}

export default Home
