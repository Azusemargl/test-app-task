import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { AppRouter } from './components'
import { Layout } from 'antd'
import './App.scss'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Layout.Content>
            <AppRouter />
          </Layout.Content>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App