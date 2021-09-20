import { rootReducer } from './reducers/index'
import { Action, applyMiddleware, createStore } from "redux"
import thunk, { ThunkAction } from 'redux-thunk'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// Types
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type InferAction<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never
export type BaseThunk<A extends Action, R = Promise<void>> = ThunkAction<R, AppState, unknown, A>