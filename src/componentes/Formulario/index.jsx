import {
  FormularioContainer,
  Form,
  Label,
  Input,
  Botao
} from './Formulario.styled'

function Formulario({ aoPesquisar }) {
  const submitHandler = (e) => {
    e.preventDefault()
    const tecnologia = e.target.elements.tecnologia.value
    aoPesquisar(tecnologia)
  }

  return (
    <FormularioContainer>
      <Form onSubmit={submitHandler}>
        <Label htmlFor="tecnologia">Tecnologia</Label>
        <Input type="text" id="tecnologia" name="tecnologia" required />
        <Botao type="submit">Pesquisar</Botao>
      </Form>
    </FormularioContainer>
  )
}

export default Formulario
