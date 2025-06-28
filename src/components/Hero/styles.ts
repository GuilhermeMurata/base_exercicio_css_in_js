import styled from 'styled-components'

export const Form = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.corPrincipal};
    content: '';
    opacity: 0.7;
  }
`

export const FormContainer = styled.div`
  position: relative;
  color: ${(props) => props.theme.textColor};
  text-align: center;
  width: 100%;
  max-width: 800px;
  padding: 0 16px;
`

export const Title = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
  margin: 0 auto;
  line-height: 1.2;
`
