import React from 'react'
import {Layout,Button,} from 'antd';
import './Navbar.css';
import Title from 'antd/lib/typography/Title';
const {Header,Content,Footer}=Layout;

function Navbar(props) {
 return(
  <Header className="header">
  <Button type ="primary" className='mainBtn'  shape='round' size='large'>Logout</Button>
  <Title className="title"> <b> My Munros </b></Title>
</Header>
 )
}


export default Navbar;