import styled from "styled-components";


interface TimerType {
  hover: boolean
}

export const MainTimerStyled = styled.main<TimerType>`
  width: 100%;
  height: 100%;
  max-width: 25rem;
  max-height: 25rem;

  border-radius: 50%;
  background: rgb(43,47,87);
  background: linear-gradient(324deg, rgba(43,47,87,1) 0%, rgba(20,25,54,1) 100%);

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
`

export const TimerWrapperStyled = styled.div`
  width: 90%;
  height: 90%;
  max-width: 22.25rem;
  max-height: 22.25rem;

  background-color: #181b36;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const TimerStyled = styled.div`
  width: 100%;
  
  display: grid;
  grid-template-columns: min-content 30px min-content;
  grid-template-rows: none;
  justify-items: center;
  justify-content: center;

  & span {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 5.9375rem;
    color: #e0e9f7;
  }
`


export const TimerStatus = styled.span<TimerType>`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1rem;
  transition: all 0.1s ease;
  color: ${(props) => props.hover ? '#ff7878' : '#e0e9f7'};
`