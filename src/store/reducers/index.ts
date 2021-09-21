import { combineReducers } from "redux"
import { contactsReducer } from './contacts/contactsReducer'
import { authReducer } from './auth/authReducer'

export const rootReducer = combineReducers({
   authReducer, contactsReducer
})