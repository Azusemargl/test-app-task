import { AuthActions } from "./auth/actions"
import { ContactsActions } from "./contacts/actions"

export const AllActionCreators = {
   ...AuthActions,
   ...ContactsActions
}