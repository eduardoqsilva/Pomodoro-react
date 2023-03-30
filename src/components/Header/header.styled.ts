import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100vw;
  height: 100vh;

  background: rgb(32,32,66);
  background: radial-gradient(circle, rgba(32,32,66,1) 0%, rgba(30,34,64,1) 100%);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
  padding: 1rem;

  @media (max-height: 800px) {
    gap: 2rem;

    & > h1 {
      display: none;
    }
  }
`