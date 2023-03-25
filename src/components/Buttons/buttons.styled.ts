import styled from "styled-components";

export const ButtonsWrapperStyled = styled.div`
  min-width: 24.375rem;
  height: 4.2rem;

  background-color: #1a1d3c;
  border-radius: 40px;

  display: flex;
  gap: 0.5rem;

  padding: 0.4rem;
`


interface ButtonType {
  active: boolean
}

export const ButtonStyled = styled.button<ButtonType>`
  width: 100%;
  border-radius: 40px;
  padding: 1rem;
  border: none;

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  background: transparent;
  color: #6b7293;
  transition: all 0.1s ease-in;
  ${(props) => props.active 
    ? `color: #1E213F; background-color: #ff7878;` 
    : ''
  }
   
`