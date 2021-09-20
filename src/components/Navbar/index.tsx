import { Layout, Row, Menu } from 'antd'

const Navbar = () => {
   return (
      <Layout.Header>
         <Row justify="end">
            <Menu theme="dark" mode="horizontal" selectable={false}>
               <Menu.Item key="1">Выйти</Menu.Item>
            </Menu>
         </Row>
      </Layout.Header>
   )
}

export default Navbar