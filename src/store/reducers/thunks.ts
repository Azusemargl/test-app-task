import { AuthThunks } from "./auth/thunks"
import { ContactsThunks } from "./contacts/thunks"

export const AllThunks = {
   ...AuthThunks,
   ...ContactsThunks
}