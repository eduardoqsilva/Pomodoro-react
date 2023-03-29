import { useEffect, useState } from "react"
import { Buttons } from "./components/Buttons"
import { Header } from "./components/Header"
import { Pomodoro } from "./components/Pomodoro"
import { useTimer } from "./hooks/useTimer"

function App() {

  const [active, setActive] = useState(0)
  const {time, func} = useTimer([1,1,15] ,active)

  useEffect(() => {
    if(time.completed === 7) {
      setActive(2)
    }else {
      if(active === 2) {
        setActive(0)
      }else{
        if(time.completed % 2 === 0){
          setActive(0)
        }else{
          setActive(1)
        }
      }
    }
  },[time.completed])

  return (
    <Header>
      <h1>pomodoro</h1>
      <Buttons active={active} setActive={setActive}/>
      <Pomodoro 
        porcent={time.porcent}
        min={time.minutes}
        sec={time.seconds}
        status={time.status}
        play={func.playAndPause}
      />
    </Header>
  )
}

export default App
