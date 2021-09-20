import { BaseThunk, InferAction } from "../../store"
import { AuthActions as actions } from "./actions"
import { initialState } from "./authReducer"

export type Thunk = BaseThunk<Action>
export type InitiaState = typeof initialState
export type Action = InferAction<typeof actions>