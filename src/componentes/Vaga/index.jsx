import { VagaContainer, Titulo, Descricao, Info } from './Vaga.styled'

function Vaga({ titulo, descricao, senioridade, local }) {
  return (
    <VagaContainer>
      <Titulo>{titulo}</Titulo>
      <Descricao>{descricao}</Descricao>
      <Info>Senioridade: {senioridade}</Info>
      <Info>Local: {local}</Info>
    </VagaContainer>
  )
}

export default Vaga
