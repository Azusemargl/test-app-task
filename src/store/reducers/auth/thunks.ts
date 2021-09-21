import { AuthActions as actions } from './actions'
import { AppDispatch } from "../../store"
import axios from 'axios'
import { Thunk } from "./types"
import { IUser } from '../../../models/IUser'

export const AuthThunks = {
   login: (login: string, password: string): Thunk => async (dispatch: AppDispatch) => {
      const response = await axios.get<IUser[]>("./data/users.json")
      const user = response.data.find(user => user.login === login && user.password === password)
      
      try {
         dispatch(actions.setLoading(true))

         // Mock user login
         setTimeout(() => {
            if (user) {
               dispatch(actions.setUser({ login, password }))
               localStorage.setItem("name", login)
               localStorage.setItem("auth", "true")
               dispatch(actions.setAuth(true))
               dispatch(actions.setLoading(false))
               dispatch(actions.setError(""))
            } else {
               dispatch(actions.setError("Некорректные данные входа"))
               dispatch(actions.setLoading(false))
            }
         }, 500)
      } catch (error) {
         dispatch(actions.setError("Произошла ошибка"))
         dispatch(actions.setLoading(false))
      }
   },
   logout: (): Thunk => async (dispatch: AppDispatch) => {
      localStorage.removeItem("name")
      localStorage.removeItem("auth")
      dispatch(actions.setUser({} as IUser))
      dispatch(actions.setAuth(false))
   }
}