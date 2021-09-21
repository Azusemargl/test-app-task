import React from 'react'
import { useActions } from './hooks'
import { AppRouter } from './components'
import { Layout } from 'antd'
import { IUser } from './models/IUser'
import './App.scss'

const App = () => {
  const { setUser, setAuth } = useActions()

  React.useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ login: localStorage.getItem("name")} as IUser)
      setAuth(true)
    }
  }, [setUser, setAuth])

  return (
    <Layout style={{ height: "100%" }}>
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
}

export default App