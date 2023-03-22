import React from 'react'

const ProjectContainer = () => {
  return (
    <section className="projects-container">
       <h2>Projetos</h2>
       <p>
            <h3>Projeto 1 - Spotify</h3>
            <p>
                Projeto de estudos desenvolvido com tecnologias CSS e HTML, se trata do desenvolvimento da pagina home do site do spotify.
            </p>
            <h3>Projeto 2 - Aplicação ToDo</h3>
            <p>
                Projeto de estudos desenvolvido com tecnologias Javascript, CSS e HTML, se trata do desenvolvimento de uma aplicação simples, de controle de tarefas.
            </p>
            <h3>Projeto 3 - Search CEP</h3>
            <p>
                Projeto de estudos desenvolvido com tecnologias React.js e CSS, se trata do desenvolvimento de uma aplicação para localização de cidades, tendo como entrada o CEP da mesmo, fazendo essa consulta com ajuda do consumo de uma API.
            </p>
            <h3>Projeto 4 - Quiz</h3>
            <p>
                Projeto de estudos desenvolvido com tecnologias React.js e CSS, se trata do desenvolvimento de um quiz sobre programação.
            </p>
            <h3>Projeto 5 - Portfólio</h3>
            <p>
                  Projeto de estudos desenvolvido com tecnologias React.js e SASS se trata do desenvolvimento desta página de portfólio.
            </p>
       </p>
          <a href="https://github.com/angeloRAMM?tab=repositories" className='btn'>
          Ver Projetos
          </a>
    </section>
  )
}

export default ProjectContainer