import { HeroContainer, HeroTitulo, HeroDescricao } from './Hero.styled'

function Hero() {
  return (
    <HeroContainer>
      <HeroTitulo>Encontre a vaga dos seus sonhos</HeroTitulo>
      <HeroDescricao>
        Filtre vagas por tecnologia e encontre a oportunidade ideal para você.
      </HeroDescricao>
    </HeroContainer>
  )
}

export default Hero
