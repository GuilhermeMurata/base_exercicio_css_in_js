import React from 'react'
import Cabecalho from './componentes/Cabecalho'
import Hero from './componentes/Hero'
import Formulario from './componentes/Formulario'
import ListaVagas from './containers/ListaVagas'

function App() {
  const [vagasFiltradas, setVagasFiltradas] = React.useState([])

  const vagas = [
    {
      titulo: 'Desenvolvedor React',
      descricao: 'Trabalhe com React e Typescript',
      senioridade: 'Pleno',
      local: 'Remoto'
    },
    {
      titulo: 'Desenvolvedor Node.js',
      descricao: 'API REST com Node e Express',
      senioridade: 'Sênior',
      local: 'São Paulo'
    }
  ]

  const aoPesquisar = (tecnologia) => {
    const filtradas = vagas.filter((vaga) =>
      vaga.titulo.toLowerCase().includes(tecnologia.toLowerCase())
    )
    setVagasFiltradas(filtradas)
  }

  return (
    <>
      <Cabecalho />
      <Hero />
      <Formulario aoPesquisar={aoPesquisar} />
      <div className="container">
        <ListaVagas vagas={vagasFiltradas.length ? vagasFiltradas : vagas} />
      </div>
    </>
  )
}

export default App
