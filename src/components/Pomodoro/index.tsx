import { useState } from "react";
import { MouseEvent } from "react";
import { MainTimerStyled, TimerStatus, TimerStyled, TimerWrapperStyled } from "./pomodoro.styled";

export function Pomodoro() {

  const [hover, setHover] = useState(false)

  function handleSetHover(e:MouseEvent<HTMLElement>) {
    setHover(true)
  }
  function handleSetOut(e:MouseEvent<HTMLElement>) {
    setHover(false)
  }

  return (
    <MainTimerStyled hover={hover}>
      <TimerWrapperStyled 
        onMouseOver={handleSetHover}
        onMouseOut={handleSetOut}
      >
        <TimerStyled>
          <span>25</span>
          <span>:</span>
          <span>30</span>
        </TimerStyled>
        <TimerStatus hover={hover}>
          Start
        </TimerStatus>
      </TimerWrapperStyled>
    </MainTimerStyled>
  )
}