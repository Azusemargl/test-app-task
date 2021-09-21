import { IUser } from '../../../models/IUser'
import { Action, InitiaState } from './types'

export const initialState = {
   user: {} as IUser,
   error: "",
   isAuth: false,
   isLoading: false
}

export const authReducer = (state = initialState, action: Action): InitiaState => {
   switch (action.type) {
      case 'SET_USER':
         return { ...state, user: action.payload }

      case 'SET_ERROR':
         return { ...state, error: action.payload, isLoading: false }

      case 'SET_AUTH':
         return { ...state, isAuth: action.payload, isLoading: false }

      case 'SET_LOADING':
         return { ...state, isLoading: action.payload }
   
      default:
         return state;
   }
}