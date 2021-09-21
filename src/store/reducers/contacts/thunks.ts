import axios from 'axios'
import { AppDispatch } from "../../store"
import { ContactsActions as actions } from './actions'
import { IContacts } from './../../../models/IContacts'
import { Thunk } from "./types"

export const ContactsThunks = {
   set: (payload: IContacts): Thunk => async (dispatch: AppDispatch) => {
      dispatch(actions.setContact(payload))
   },
   remove: (id: number) => async (dispatch: AppDispatch) => {
      dispatch(actions.deleteContact(id))
   },
   edit: (payload: IContacts) => async (dispatch: AppDispatch) => {
      dispatch(actions.editContact(payload))
   }
}