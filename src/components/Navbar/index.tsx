import { Layout, Row, Menu, Typography } from 'antd'
import { useThunks, useTypedSelector } from '../../hooks'

const Navbar = () => {
   const { logout } = useThunks()
   const name = useTypedSelector(state => state.authReducer.user.login) || localStorage.getItem("name")

   return (
      <Layout.Header>
         <Row justify="end">
            <Typography.Text strong className="header__name">{name}</Typography.Text>
            <Menu theme="dark" mode="horizontal" selectable={false}>
               <Menu.Item key="1" onClick={() => logout()}>Выйти</Menu.Item>
            </Menu>
         </Row>
      </Layout.Header>
   )
}

export default Navbar