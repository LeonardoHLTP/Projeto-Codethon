import { ChakraProvider} from '@chakra-ui/react'
import { Nav } from './components/nav'
import './App.css'
import {AppRoutes} from "./routes/routes.tsx";



export function App() {

  return (
    <>
      <ChakraProvider>
            <div className='h-[300dvh] w-full'>
                <Nav list={[{href : "/CadastroEmpresa", text: "Para empresas"}, {href : "/Login", text : "Login Usuário"}]} mainName={"Codethon"}/>
                <AppRoutes />

            </div>

      </ChakraProvider>
    </>
  )
}


