import React from 'react'
import './HeroSection.css'
import { Layout,Breadcrumb,Row ,Col ,Image,Progress,Space} from 'antd';
import hiking_logo from '../assets/hike-couple.png';
import Title from 'antd/lib/typography/Title';
const { Content } = Layout;

export default function HeroSection() {
    return (
        <Content className="hero-section">
            <Row>
                <Col span={9}>
                   <img src={hiking_logo} className="hero-img" alt="" />
                </Col>
                <Col span={15} >
                      <Space size={30}>
                           <Progress className="progress-section" width={132} style={{fontWeight:'bolder' , color:'#7c7c7'}}  strokeWidth={10} type="circle" percent={75}/>
                           <Title style={{color:'#7c7c7c' ,fontWeight:'bolder'}} className="hero-text">201/282 <br /> Munros Explored</Title>
                      </Space>
                      
                </Col>
            </Row>
        </Content>
    )
}
