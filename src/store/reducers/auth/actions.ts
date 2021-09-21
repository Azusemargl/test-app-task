import { IUser } from "../../../models/IUser"

export const AuthActions = {
   setUser: (payload: IUser) => ({ type: 'SET_USER', payload } as const),
   setError: (payload: string) => ({ type: 'SET_ERROR', payload } as const),
   setLoading: (payload: boolean) => ({ type: 'SET_LOADING', payload } as const),
   setAuth: (payload: boolean) => ({ type: 'SET_AUTH', payload } as const),
}