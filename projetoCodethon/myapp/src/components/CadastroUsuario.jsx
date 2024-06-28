import React from 'react';
import './styles.css';

const CadastroUsuario = () => {
  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form>
        <label>Nome do Usuário:</label>
        <input type="text" />
        <br />
        <label>Telefone:</label>
        <input type="text" />
        <br />
        <label>Email:</label>
        <input type="email" />
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

export default CadastroUsuario;
