import React from 'react';
import './styles.css';

const CadastroEmpresa = () => {
  return (
    <div>
      <h2>Cadastro de Empresa</h2>
      <form>
        <label>Nome da Empresa:</label>
        <input type="text" />
        <br />
        <label>CNPJ:</label>
        <input type="text" />
        <br />
        <label>Email:</label>
        <input type="email" />
        <br />
        <label>Telefone:</label>
        <input type="text" />
        <br />
        <label>Cidade/Estado:</label>
        <input type="text" />
        <br />
        <label>Endereço:</label>
        <input type="text" />
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default CadastroEmpresa;
