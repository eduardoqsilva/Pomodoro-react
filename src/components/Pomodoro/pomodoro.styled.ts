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

  @media (max-width: 450px) {
    width: 250px;
    height: 250px;
  }
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

  @media (max-width: 450px) {
    width: 230px;
    height: 230px;
  }
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
    @media (max-width: 450px) {
      font-size: 4rem;
    }
  }
`


export const TimerStatus = styled.span<TimerType>`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1rem;
  padding-left: 1rem;
  transition: all 0.1s ease;
  color: ${(props) => props.hover ? '#ff7878' : '#e0e9f7'};
  @media (max-width: 450px) {
    font-size: 0.8rem;
    letter-spacing: 0.6rem;
  }
`

interface RoundedType {
  porcent: number
}

export const RoundedWrapper = styled.div<RoundedType>`
  
  .pie {
    --p:${(props) => props.porcent};
    --b:10px;
    --c:#ff7878;
    --w:336px;
    
    @media (max-width: 450px) {
      --w:215px;
      --b: 6px;
    }

    width:var(--w);
    aspect-ratio:1;
    position:relative;
    display:inline-grid;
    place-content:center;
    font-size:25px;
    font-weight:bold;
    font-family:sans-serif;
    justify-items: center;
  }
  .pie:before,
  .pie:after {
    content:"";
    position:absolute;
    border-radius:50%;
  }
  .pie:before {
    inset:0;
    transition: all 0.2s linear;
    background:
      radial-gradient(farthest-side,var(--c) 98%,#0000) top/var(--b) var(--b) no-repeat,
      conic-gradient(var(--c) calc(var(--p)*1%),#0000 0);
    -webkit-mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
            mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
  }
  .pie:after {
    inset:calc(50% - var(--b)/2);
    background:var(--c);
    transform:rotate(calc(var(--p)*3.6deg)) translateY(calc(55% - var(--w)/2));
  }
`