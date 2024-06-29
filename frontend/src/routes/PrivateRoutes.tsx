import { CadastroEmpresa } from "../pages/Empresa/CadastroEmpresa"
import { CadastroUsuario } from "../pages/Usuario/CadastroUser"
import VisualizarAgedamentos from "../pages/Empresa/VisualizarAgendamentos"

export default function PrivateRoutes() { 
   return [
    {
      path : "/CadastroUsuario",
      element : <CadastroUsuario/>,
      // errorElement: <h1>Error :( </h1>,
    }, 
    { 
      path : "/CadastroEmpresa",
      element :  <CadastroEmpresa/>,
      // errorElement : <h1> Error :( </h1>
    },
    {
      path : "/EmpresaVisualizar",
      element :  <VisualizarAgedamentos/>,
      // errorElement: <h1>Error :( </h1>
    }
   ]
}