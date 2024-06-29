import { ChakraProvider } from '@chakra-ui/react'
import { Nav } from './components/nav'
import './App.css'
import { Outlet } from 'react-router-dom'



export function App() {

  return (
    <>
      <ChakraProvider>
        <div className='h-[300dvh] w-full'>
          <Nav list={
            [
              { href: "/CadastroEmpresa", text: "Para empresas" },
              { href: "/Login", text: "Login Usuário" },
<<<<<<< Updated upstream
              { href: '/VisualizarAgendamentos', text: 'Visualizar Agendamentos' },
              ]
              } mainName={"Codethon"} />

=======
              //{ href: '/VisualizarAgendamentos', text: 'Visualizar Agendamentos' },
            ]
          } mainName={"Codethon"} />
        </div>
        <div className='mt-8 p-4'>
          <Outlet />
>>>>>>> Stashed changes
        </div>

      </ChakraProvider>
    </>
  )
}


