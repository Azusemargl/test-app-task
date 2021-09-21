import React from 'react'
import { rules } from '../../utils/rules'
import { useThunks, useTypedSelector } from '../../hooks'
import { Form, Input, Button } from 'antd'
import { Row, Card } from 'antd'

const Login: React.FC = () => {
   const { login } = useThunks()
   const { error, isLoading } = useTypedSelector(state => state.authReducer)

   const [loginName, setLoginName] = React.useState("")
   const [password, setPassword] = React.useState("")

   const onSubmit = () => {
      login(loginName, password)
   }

   return (
      <Row justify="center" align="middle" className="form">
         <Card className="form__card">
            {error && <span className="form__error">{error}</span>}
            <Form
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
               onFinish={onSubmit}
            >
               <Form.Item
                  label="Логин"
                  name="login"
                  rules={[
                     rules.required("Введите имя"),
                     rules.min(4, "Минимум 4 символа"),
                     rules.max(14, "Максимум 14 символов")
                  ]}
               >
                  <Input value={loginName} onChange={e => setLoginName(e.target.value)} />
               </Form.Item>

               <Form.Item
                  label="Пароль"
                  name="password"
                  rules={[
                     rules.required("Введите пароль"),
                     rules.min(4, "Минимум 4 символа"),
                     rules.max(14, "Максимум 14 символов")
                  ]}
               >
                  <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
               </Form.Item>

               <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit" disabled={isLoading}>Войти</Button>
               </Form.Item>
            </Form>
         </Card>
      </Row>
   )
}

export default Login