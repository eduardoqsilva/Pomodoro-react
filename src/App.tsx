import { useState } from "react"
import { Buttons } from "./components/Buttons"
import { Header } from "./components/Header"

function App() {

  const [active, setActive] = useState(0)

  return (
    <Header>
      <h1>pomodoro</h1>
      <Buttons active={active} setActive={setActive}/>
    </Header>
  )
}

export default App
