import { IContacts } from './../../../models/IContacts'

export const ContactsActions = {
   setContact: (payload: IContacts) => ({ type: 'SET_CONTACT', payload } as const),
   deleteContact: (payload: number) => ({ type: 'DELETE_CONTACT', payload } as const),
   editContact: (payload: IContacts) => ({ type: 'EDIT_CONTACT', payload } as const)
}