import styled from 'styled-components'

export const FormularioContainer = styled.section`
  background-color: #f1f5f9;
  padding: 24px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
`

export const Label = styled.label`
  font-size: 16px;
  color: #0f172a;
`

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #94a3b8;
  border-radius: 4px;
`

export const Botao = styled.button`
  background-color: #0f172a;
  color: #f8fafc;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #1e293b;
  }
`
