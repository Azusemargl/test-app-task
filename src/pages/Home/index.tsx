import React from 'react'
import { Navbar } from '../../components'
import { Row, Col, Typography } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import { useTypedSelector } from '../../hooks'
import { ContactCard } from '../../components/ContactCard'

const Home: React.FC = React.memo(() => {
   const data = useTypedSelector(state => state.contactsReducer.contacts)

   return (
      <div>
         <Navbar />
         <div className="container">
            <Typography.Title level={1}>Контакты</Typography.Title>
            <Row gutter={16} justify={`${data.length ? "start" : "center"}`}>
               {data.length ? (
                  data.map(contact => (
                     <ContactCard {...contact} key={contact.id} />
                  ))
               ) : (
                  <Col className="empty">
                     <Row justify="center" align="middle" className="empty__row">
                        <InboxOutlined className="empty__icon" />
                        <p className="empty__text">Ничего не найдено</p>
                     </Row>
                  </Col>
               )}
            </Row>
         </div>
      </div>
   )
})

export default Home