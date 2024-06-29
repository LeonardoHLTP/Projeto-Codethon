import Login from "../pages/Login"
import {CadastroUsuario} from "../pages/Usuario/CadastroUser.tsx";
import Home from "../pages/Home.tsx";

export default function PublicRoutes() {
  return [
    {
      path : "/",
      element : <Home />,
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
