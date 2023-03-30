import styled from "styled-components";

export const ButtonConfigStyled = styled.button`
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 50%;
  border: none;
  transition: all .2s ease-in;
  
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    transform: rotate(360deg);
  }
`
interface type {
  open: boolean
}
export const OverlayWrapperStyled = styled.div<type>`
  width: 100%;
  height: 100%;

  
  position: absolute;
  top: 0;
  left: 0;
  
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur(5px);
  padding: 1rem;
  border-radius: 8px;

  display: ${(props) => props.open ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  
  color: #161932;
  font-family: 'roboto', sans-serif;

  & .settingsBox {
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 300px;
    background-color: #fdfdfd;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h2 {
      margin: 1rem 0;
    }

    & .inputs {
      width: 100%;
      height: 200px;
      /* background: red; */
      border-top: 2px solid rgba(0,0,0,0.1);

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0.8rem;
      gap: 0.5rem;


      & div:nth-child(1) {
        position: relative;
        &::before {
          content: 'Pomodoro';
          position: absolute;
          top: -20px;
          left: 0;
          
          width: 100%;
          text-align: center;          
          font-family: 'Roboto', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
        }
      }
      & div:nth-child(2) {
        position: relative;
        &::before {
          content: 'short break';
          position: absolute;
          top: -20px;
          left: 0;
          
          width: 100%;
          text-align: center;          
          font-family: 'Roboto', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
        }
      }
      & div:nth-child(3) {
        position: relative;
        &::before {
          content: 'long break';
          position: absolute;
          top: -20px;
          left: 0;
          
          width: 100%;
          text-align: center;          
          font-family: 'Roboto', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
        }
      }
    }
    & input {
      width: 100%;
      padding: 1rem;
      border: none;

      background-color: #eff1fa;
      border-radius: 10px;

      outline: none;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 1rem;
    }
  }

  & button {
    border-radius: 15px;
    border: none;
    padding: 1rem;
    background-color: #ff7878;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: #fff;

    transform: translateY(50%);

    &:active {
      transform: scale(0.95) translateY(50%);
    }
  }
`
