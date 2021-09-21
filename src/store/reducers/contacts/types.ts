import { BaseThunk, InferAction } from "../../store"
import { ContactsActions as actions } from "./actions"
import { initialState } from "./contactsReducer"

export type Thunk = BaseThunk<Action>
export type InitiaState = typeof initialState
export type Action = InferAction<typeof actions>