import React from 'react'
import { useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { Row, Card } from 'antd'
import { AuthThunks } from '../../store/reducers/auth/thunks';

const Login: React.FC = () => {
   const dispatch = useDispatch()

   const [login, setLogin] = React.useState("")
   const [password, setPassword] = React.useState("")

   const onSubmit = () => {
      dispatch(AuthThunks.login(login, password))
   }

   return (
      <Row justify="center" align="middle" className="form">
         <Card className="form__card">
            <Form
               name="auth"
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
               onFinish={onSubmit}
               autoComplete="off"
            >
               <Form.Item
                  label="Логин"
                  name="login"
                  rules={[{ required: true, message: 'Введите Ваше имя' }]}
               >
                  <Input value={login} onChange={e => setLogin(e.target.value)} />
               </Form.Item>

               <Form.Item
                  label="Пароль"
                  name="password"
                  rules={[{ required: true, message: 'Ведите Ваш пароль' }]}
               >
                  <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
               </Form.Item>

               <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">Войти</Button>
               </Form.Item>
            </Form>
         </Card>
      </Row>
   )
}

export default Login