import React from 'react'
import { useThunks } from '../../hooks'
import { EditTypeNames, IContacts } from '../../models/IContacts'
import { Avatar, Card, Col, Row } from 'antd'
import { CheckCircleOutlined, DeleteOutlined, EditOutlined, RedoOutlined, StopOutlined } from '@ant-design/icons'
import style from './style.module.scss'
import { validator } from '../../utils/validator'

export const ContactCard: React.FC<IContacts> = ({ id, name, phone, email }) => {
   const { remove, edit } = useThunks()

   const [editMode, setEditMode] = React.useState(false)
   const [editedName, setEditedName] = React.useState(name)
   const [editedPhone, setEditedPhone] = React.useState(phone)
   const [editedEmail, setEditedEmail] = React.useState(email)
   const [error, setError] = React.useState<EditTypeNames | "">("")

   const setAvatarBackground = (name: string) => {
      return `#${name.length}${name.length - 1}${name.length - 2}`
   }

   const onEdit = () => {
      if (!error) {
         setEditMode(!editMode)
         edit({ id, name: editedName, phone: editedPhone, email: editedEmail })
      }
   }

   const rewrite = () => {
      setEditedName(name)
      setEditedPhone(phone)
      setEditedEmail(email)
      setError("")
   }

   const validation = (value: string, type: EditTypeNames) => {
      switch (type) {
         case "name":
            validator.name(value, setError, setEditedName, type)
            break;

         case "phone":
            validator.phone(value, setError, setEditedPhone, type)
            break;

         case "email":
            validator.email(value, setError, setEditedEmail, type)
            break;

         default:
            break;
      }
   }

   return (
      <Col span={8}>
         <Card className={style.contact}>
            <div className={style.contact__header}>
               <Avatar size={64} style={{ fontSize: "24px", backgroundColor: setAvatarBackground(name) }}>
                  {name[0]}
               </Avatar>
               {editMode ? (
                  <div className={style.contact__header_edit}>
                     <input value={editedName} onChange={e => validation(e.target.value, "name")} className={style.contact__name_input} />
                     {error === "name" && <span className={style.contact__error}>Некорректное значение</span>}
                  </div>
               ) : (
                  <p className={style.contact__name}>{name}</p>
               )}
            </div>
            <div className={style.contact__row}>
               <span>Телефон:</span>
               {editMode ? (
                  <div className={style.contact__row_edit}>
                     <input value={editedPhone} onChange={e => validation(e.target.value, "phone")} />
                     {error === "phone" && <span className={style.contact__error}>Некорректное значение</span>}
                  </div>
               ) : (
                  <a href={phone} className={style.contact__item}>{phone}</a>
               )}
            </div>
            <div className={style.contact__row}>
               <span>Email:</span>
               {editMode ? (
                  <div className={style.contact__row_edit}>
                     <input value={editedEmail} onChange={e => validation(e.target.value, "email")} />
                     {error === "email" && <span className={style.contact__error}>Некорректное значение</span>}
                  </div>
               ) : (
                  <a href={email} className={style.contact__item}>{email}</a>
               )}
            </div>
            <Row justify="space-between" align="middle" className={style.contact__footer}>
               {editMode &&
                  <button className={style.contact__rewrite} onClick={() => rewrite()}>
                     <RedoOutlined className={`${error ? style.contact__rewrite_error : ""}`} />
                  </button>
               }
               <Row justify="end" style={{ width: `${editMode ? "auto" : "100%"}` }}>
                  {editMode ? (
                     <button className={style.contact__save_icon}>
                        {error
                           ? <StopOutlined className={style.contact__cancel} />
                           : <CheckCircleOutlined onClick={() => onEdit()} />
                        }
                     </button>
                  ) : (
                     <button className={style.contact__edit_icon} onClick={() => onEdit()}>
                        <EditOutlined />
                     </button>
                  )}
                  <button className={style.contact__delete_icon} onClick={() => remove(id)}>
                     <DeleteOutlined />
                  </button>
               </Row>
            </Row>
         </Card>
      </Col>
   )
}
