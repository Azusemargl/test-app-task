import { AuthActions as actions } from './actions';
import { Thunk } from "./types"
import { AppDispatch } from "../../store"

export const AuthThunks = {
   login: (login: string, password: string): Thunk => async (dispatch: AppDispatch) => {
      try {
         dispatch(actions.setLoading(true))
         dispatch(actions.setUser({ login, password }))
         dispatch(actions.setAuth(true))
         dispatch(actions.setLoading(false))
      } catch (error) {
         dispatch(actions.setError("Произошла ошибка"))
         dispatch(actions.setLoading(false))
      }
   }
}