import { useState } from "react";
import { MouseEvent } from "react";
import { MainTimerStyled, RoundedWrapper, TimerStatus, TimerStyled, TimerWrapperStyled } from "./pomodoro.styled";

interface PomodoroType {
  porcent: number
  min: number
  sec: number
  status: string
}

export function Pomodoro({porcent, min, sec, status}:PomodoroType) {

  const [hover, setHover] = useState(false)

  function handleSetHover(e:MouseEvent<HTMLElement>) {
    setHover(true)
  }
  function handleSetOut(e:MouseEvent<HTMLElement>) {
    setHover(false)
  }

  function handleOnclick() {
    console.log('iniciou')
  }

  return (
    <MainTimerStyled hover={hover}>
      <TimerWrapperStyled 
        onMouseOver={handleSetHover}
        onMouseOut={handleSetOut}
        onClick={handleOnclick}
      >
       <RoundedWrapper porcent={porcent}>
          <div className="pie">
              <TimerStyled>
                <span>{min.toString().padStart(2,'0')}</span>
                <span>:</span>
                <span>{sec.toString().padStart(2,'0')}</span>
              </TimerStyled>
              <TimerStatus hover={hover}>
                {status}
              </TimerStatus>
          </div>
       </RoundedWrapper>
      </TimerWrapperStyled>
    </MainTimerStyled>
  )
}