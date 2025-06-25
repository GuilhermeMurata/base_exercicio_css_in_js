import Vaga from '../../componentes/Vaga'
import { ListaContainer } from './ListaVagas.styled'

function ListaVagas({ vagas }) {
  return (
    <ListaContainer>
      {vagas.map((vaga, index) => (
        <Vaga
          key={index}
          titulo={vaga.titulo}
          descricao={vaga.descricao}
          senioridade={vaga.senioridade}
          local={vaga.local}
        />
      ))}
    </ListaContainer>
  )
}

export default ListaVagas
