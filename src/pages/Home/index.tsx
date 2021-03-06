import React from 'react'
import { Form, Navbar, Search } from '../../components'
import { Row, Col, Typography, Button } from 'antd'
import { InboxOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { useTypedSelector } from '../../hooks'
import { ContactCard } from '../../components/ContactCard'

const Home: React.FC = React.memo(() => {
   const data = useTypedSelector(state => state.contactsReducer.contacts)

   const [value, setValue] = React.useState("")
   const [filterd, setFilterd] = React.useState(data)
   const [addMode, setAddMode] = React.useState(false)

   React.useEffect(() => {
      setFilterd(data.filter(contact => contact.name.toLowerCase().includes(value.toLocaleLowerCase())))
   }, [value, data])

   return (
      <div>
         <Navbar />
         <div className="container">
            <Row justify="space-between" align="middle">
               <Typography.Title level={1}>Контакты</Typography.Title>
               <Button
                  type="primary"
                  shape="round"
                  icon={addMode ? <MinusOutlined /> : <PlusOutlined />}
                  onClick={() => setAddMode(!addMode)}
                  className="button__add"
               >
                  Новый контакт
               </Button>
            </Row>
            {addMode && <Form setAddMode={setAddMode} />}
            <Search value={value} setter={setValue} />
            <Row gutter={16} justify={`${filterd.length ? "start" : "center"}`}>
               {filterd.length ? (
                  filterd.map(contact => (
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