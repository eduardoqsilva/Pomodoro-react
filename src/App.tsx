import { useState } from "react"
import { Buttons } from "./components/Buttons"
import { Header } from "./components/Header"
import { Pomodoro } from "./components/Pomodoro"

function App() {

  const [active, setActive] = useState(0)

  return (
    <Header>
      <h1>pomodoro</h1>
      <Buttons active={active} setActive={setActive}/>
      <Pomodoro 
        porcent={90}
        min={10}
        sec={0}
        status={'start'}
      />
    </Header>
  )
}

export default App
