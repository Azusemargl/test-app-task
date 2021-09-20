import { rootReducer } from './reducers/index'
import { applyMiddleware, createStore } from "redux"
import thunk from 'redux-thunk'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch