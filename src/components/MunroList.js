import React from 'react'
import './MunroList.css'
import { Layout,Breadcrumb,Row ,Col ,Image,Progress,Space,PageHeader,Button,Card} from 'antd';
import Title from 'antd/lib/typography/Title';
import mountain from '../assets/mountain.jpg'
const { Content } = Layout;
const {Meta} =Card;
export default function MunroList() {
    return (
        <Content className="container">
          <PageHeader 
          
          title="My Munro List"
          extra={[
              <Button type='primary'  key='1'> Add New</Button>
          ]}
          />
          <Row gutter={[24,24]}>
          
              {new Array(8).fill(null).map((_,index)=>(
                  <Col span={6}>
                  
                      <Card hoverable cover={<img src={mountain}/>}>
                          <Meta title='Ben Nelvis' />
                      </Card>
                 
                  </Col>
              ))}
         
          </Row>

        </Content>
    )
}
