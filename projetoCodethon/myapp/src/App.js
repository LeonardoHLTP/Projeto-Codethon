// App.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CadastroUsuario from './components/CadastroUsuario';
import CadastroEmpresa from './components/CadastroEmpresa';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/cadastro-usuario" component={CadastroUsuario} />
          <Route path="/cadastro-empresa" component={CadastroEmpresa} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
