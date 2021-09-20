import React from 'react'
import { Form, Input, Button } from 'antd';

const Login: React.FC = () => {
   const [login, setLogin] = React.useState("")
   const [password, setPassword] = React.useState("")

   const onSubmit = () => {
      console.log(login, password)
   }

   return (
      <div>
         <Form
            name="auth"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
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
      </div>
   )
}

export default Login