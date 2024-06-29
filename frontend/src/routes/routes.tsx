import { createBrowserRouter } from "react-router-dom"
import { App } from "../App"
import { Login } from "../pages/Login"
import { CadastroEmpresa } from "../pages/Empresa/CadastroEmpresa"
import { CadastroUsuario } from "../pages/Usuario/CadastroUser"
<<<<<<< Updated upstream
import { CadastroProduto } from "../pages/Empresa/CadastroProdutos"
import { VisualizarAgendamentos } from "../pages/Usuario/VisualizarAgendamentos";
=======
import { VisualizarAgendamentos } from "../pages/Usuario/VisualizarAgendamentos";
import { DetalhesAgendamento } from "../pages/Usuario/DetalhesAgendamento";
>>>>>>> Stashed changes

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error :( </h1>,
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <h1>Error :( </h1>,
  },
  {
    path: "/CadastroUsuario",
    element: <CadastroUsuario />,
    errorElement: <h1>Error :( </h1>,
  },
  {
    path: "/CadastroEmpresa",
    element: <CadastroEmpresa />,
    errorElement: <h1> Error :( </h1>
  },
  {
    path: "/CadastroProduto",
    element: <CadastroProduto />,
    errorElement: <h1> Error :( </h1>
  },
  {
    path: 'VisualizarAgendamentos',
    element: <VisualizarAgendamentos />,
    errorElement: <h1> Error :( </h1>
  },
  {
    path: '/DetalhesAgendamento/:id',
    element: <DetalhesAgendamento />,
    errorElement : <h1> Error :( </h1>
  },
])
