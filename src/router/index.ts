import { Home, Login } from "../pages"

interface IRouter {
   path: string
   exact?: boolean
   component: React.ComponentType
}

export enum RouteNames {
   LOGIN = "/login",
   HOME = "/"
}

export const publicRouter: Array<IRouter> = [
   {path: RouteNames.LOGIN, exact: true, component: Login}
]

export const privateRouter: Array<IRouter> = [
   {path: RouteNames.HOME, exact: true, component: Home}
]