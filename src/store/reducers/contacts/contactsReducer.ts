import { IContacts } from '../../../models/IContacts'
import { Action, InitiaState } from './types'

export const initialState = {
   contacts: [
      {
         "id": 1,
         "name": "Ivan",
         "phone": "+7(222) 222-22-22",
         "email": "ivan@gmail.com"
      },
      {
         "id": 2,
         "name": "Ekaterina",
         "phone": "+7(111) 111-11-11",
         "email": "ekaterina@gmail.com"
      },
      {
         "id": 3,
         "name": "Sergei",
         "phone": "+7(555) 555-55-55",
         "email": "sergei@gmail.com"
      },
      {
         "id": 4,
         "name": "Yana",
         "phone": "+7(333) 333-33-33",
         "email": "yana@gmail.com"
      }
   ] as Array<IContacts>,
}

export const contactsReducer = (state = initialState, action: Action): InitiaState => {
   switch (action.type) {
      case 'SET_CONTACT':
         return { ...state, contacts: [action.payload, ...state.contacts] }

      case 'DELETE_CONTACT':
         return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload) }

      case 'EDIT_CONTACT':
         return {
            ...state, contacts: state.contacts.map(contact => {
               if (contact.id === action.payload.id) {
                  contact.name = action.payload.name
                  contact.phone = action.payload.phone
                  contact.email = action.payload.email
                  return contact
               }
               return contact
            })
         }

      default:
         return state
   }
}