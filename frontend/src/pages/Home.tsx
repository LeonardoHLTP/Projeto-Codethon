import React from 'react'
import {useNavigate} from "react-router-dom";
import './home.css';
import './java.js'


const Home = () => {

    const navigate = useNavigate();

    return (
        <>
            <body>
            <header>
                <nav>
                    <a class="logo" href="index.html">Codethon</a>
                    <div class="mobile-menu">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                    <ul class="nav-list">
                        <li><a onClick={() => navigate("/CadastroUsuario")}>Cadastro</a></li>
                        <li><a onClick={() => navigate("/Login")}>Login</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="agenda">
                    <h2>Agenda Virtual</h2>
                    <div class="card">
                        <p>Explore uma nova maneira de gerenciar seu tempo com nossa Agenda Virtual intuitiva e eficiente. Projetada para simplificar sua vida!</p>
                    </div>
                </section>
            </main>
            </body>
        </>
    )
}

export default Home;
