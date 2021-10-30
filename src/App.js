import React from 'react'
import './App.css';
import { Layout} from 'antd';
import Navbar from './components/Navbar.js';
import HeroSection from './components/HeroSection.js';
import MunroList from './components/MunroList';
const {Footer} =Layout;


export default function App() {
  return (
    <Layout className="layout">
      <Navbar/>
      <HeroSection/>
      <MunroList />
      <Footer>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>

    
  )
}



