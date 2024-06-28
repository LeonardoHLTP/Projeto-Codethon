import { createBrowserRouter } from "react-router-dom"
import { App } from "../App"
import { LoginUser } from "../pages/Usuario/LoginUser"

export const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    errorElement: <h1>Error :( </h1>,
  },
  {
    path: "/userLogin",
    element : <LoginUser/>,
    errorElement: <h1>Error :( </h1>,
  }
])