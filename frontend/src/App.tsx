import { ChakraProvider} from '@chakra-ui/react'
import { Nav } from './components/nav'
import './App.css'
import { Outlet } from 'react-router-dom'



export function App() {
 
  return (
    <>
      <ChakraProvider>
            <div className='h-[300dvh] w-full'>
                <Nav list={[{href : "/CadastroEmpresa", text: "Para empresas"}, {href : "/Login", text : "Login Usuário"}]} mainName={"Codethon"}/>
  
                
            </div>

      </ChakraProvider>
    </>
  )
}


