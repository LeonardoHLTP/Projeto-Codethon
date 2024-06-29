import Login from "../pages/Login"
import {CadastroUsuario} from "../pages/Usuario/CadastroUser.tsx";
import Home from "../pages/Home.tsx";
import { CadastroEmpresa } from "../pages/Empresa/CadastroEmpresa.tsx";
import VisualizarAgedamentosEmpresa from "../pages/Empresa/VisualizarAgendamentos.tsx";
import VisualizarAgendamentos from "../pages/VisualizarAgendamento.tsx";
import DetalhesAgendamento from "../pages/DetalhesAgendamento.tsx";

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
    },
    {
      path : "/CadastroEmpresa",
      element :  <CadastroEmpresa/>,
      errorElement : <h1> Error :( </h1>
  },
  {
      path : "/EmpresaVisualizar",
      element :  <VisualizarAgedamentosEmpresa/>,
      errorElement: <h1>Error :( </h1>
  },
  {
      path: "/DetalheAgendamento/:id",
      element : <DetalhesAgendamento />,
      errorElement: <h1>Error :( </h1>
  },
  {
      path: "/Agendamentos",
      element: <VisualizarAgendamentos />,
      errorElement: <h1>Error :( </h1>
  }
  ]
}
