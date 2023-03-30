import { useEffect, useState } from "react"
import { Buttons } from "./components/Buttons"
import { Config } from "./components/ConfigApp"
import { Header } from "./components/Header"
import { Pomodoro } from "./components/Pomodoro"
import { useTimer } from "./hooks/useTimer"

function App() {

  const [active, setActive] = useState(0)
  const [customTimes, setCustomTimes] = useState([25,5,15])
  const {time, func} = useTimer(customTimes ,active)

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

  useEffect(() => {
    const values = localStorage.getItem('values')
    if(values !== null) {
      setCustomTimes(JSON.parse(values))
      console.log(JSON.parse(values))
    }
  }, [])
  

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
      <Config setCustomTimes={setCustomTimes}/>
    </Header>
  )
}

export default App
