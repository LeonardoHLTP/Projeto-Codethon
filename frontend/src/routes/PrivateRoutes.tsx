import { CadastroEmpresa } from "../pages/Empresa/CadastroEmpresa"
import VisualizarAgedamentosEmpresa from "../pages/Empresa/VisualizarAgendamentos"
import DetalhesAgendamento from "../pages/DetalhesAgendamento.tsx";
import VisualizarAgendamentos from "../pages/VisualizarAgendamento.tsx";

export default function PrivateRoutes() {
   return {
       children: [
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
}
