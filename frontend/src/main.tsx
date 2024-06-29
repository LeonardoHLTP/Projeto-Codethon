import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './routes/routes'
import './index.css'

import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
        <AppRoutes/>
    </ChakraProvider>
  </React.StrictMode>,
)
