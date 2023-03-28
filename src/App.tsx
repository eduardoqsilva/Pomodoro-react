import { useEffect, useState } from "react"
import { Buttons } from "./components/Buttons"
import { Header } from "./components/Header"
import { Pomodoro } from "./components/Pomodoro"
import { useTimer } from "./hooks/useTimer"

function App() {

  const [active, setActive] = useState(0)
  const {time, func} = useTimer([1,6,15] ,active)

  return (
    <Header>
      <h1>pomodoro</h1>
      <Buttons active={active} setActive={setActive}/>
      <Pomodoro 
        porcent={time.porcent}
        min={time.minutes}
        sec={time.seconds}
        status={time.status}
      />
      <button onClick={() => func.pause()}>pause</button>
      <button onClick={() => func.play()}>play</button>
    </Header>
  )
}

export default App
