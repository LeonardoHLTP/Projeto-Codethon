import Login from "../pages/Login"
import {CadastroUsuario} from "../pages/Usuario/CadastroUser.tsx";

export default function PublicRoutes() {
  return [
    {
      path : "/",
      element : <Login/>,
      errorElement: <h1>Error :( </h1>,
    },
    {
      path : "/CadastroUsuario",
      element : <CadastroUsuario/>,
      errorElement: <h1>Error :( </h1>,
    },
    {
      path: "/Login",
      element : <Login/>,
      errorElement: <h1>Error :( </h1>,
    }
  ]
}
