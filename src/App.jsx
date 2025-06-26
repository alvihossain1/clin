import './index.css'
import Template from "./views/Template"
import { Provider } from 'react-redux'
import store from './context/redux-store/store'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'

console.log("STORE", store)

export default function App() {
  return (
   <Provider store={store}>
    <RouterProvider router={router} />
   </Provider>
  )
}

