import React from 'react'
import { Button, Card, Form as AddedForm, Input, Row } from 'antd'
import { rules } from '../../utils/rules'
import { CheckOutlined } from '@ant-design/icons'
import { useThunks } from '../../hooks'
import style from './style.module.scss'

interface FormProps {
   setAddMode: (value: boolean) => void
}

const Form: React.FC<FormProps> = ({ setAddMode }) => {
   const { set } = useThunks()

   const [name, setName] = React.useState("")
   const [phone, setPhone] = React.useState("")
   const [email, setEmail] = React.useState("")

   const id = Number(new Date())

   const onSubmit = (id: number, name: string, phone: string, email: string) => {
      setAddMode(false)
      set({ id, name, phone, email })
   }

   return (
      <Card className={style.form}>
         <div className="form__card">
            <AddedForm
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 8 }}
               onFinish={() => onSubmit(id, name, phone, email)}
            >
               <AddedForm.Item
                  label="Логин"
                  name="name"
                  rules={[
                     rules.required("Введите имя"),
                     rules.min(4, "Минимум 4 символа"),
                     rules.max(20, "Максимум 20 символов")
                  ]}
               >
                  <Input value={name} onChange={e => setName(e.target.value)} />
               </AddedForm.Item>

               <AddedForm.Item
                  label="Телефона"
                  name="phone"
                  rules={[
                     rules.required("Введите телефон"),
                     rules.phone("Невалидный номер"),
                     rules.min(4, "Минимум 4 символа"),
                     rules.max(14, "Максимум 14 символов")
                  ]}
               >
                  <Input value={phone} onChange={e => setPhone(e.target.value)} />
               </AddedForm.Item>

               <AddedForm.Item
                  label="Email"
                  name="email"
                  rules={[
                     rules.required("Введите email"),
                     rules.email("Невалидный email"),
                     rules.min(4, "Минимум 4 символа"),
                     rules.max(20, "Максимум 20 символов")
                  ]}
               >
                  <Input value={email} onChange={e => setEmail(e.target.value)} />
               </AddedForm.Item>
               <Row justify="center">
                  <Button
                     type="primary"
                     shape="round"
                     htmlType="submit"
                     className="button__save"
                     icon={<CheckOutlined />}
                  >
                     Добавить
                  </Button>
               </Row>
            </AddedForm>
         </div>
      </Card>
   )
}

export default Form