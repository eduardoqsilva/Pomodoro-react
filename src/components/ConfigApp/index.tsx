import { ButtonConfigStyled, OverlayWrapperStyled } from "./configApp.styled";
import img from "../../assets/svgs/config.svg"
import { useState, ChangeEvent, useEffect } from "react";

interface ConfigType {
  setCustomTimes: (values:number[]) => void
}

export function Config({setCustomTimes}:ConfigType) {

  const [open, setOpen] = useState(false)
  const [values, setValues] = useState<number[]>([25,5,15])


  function handleOnAdd(e: React.ChangeEvent<HTMLInputElement>, id:number) {
    let value = e.target.value.toString()
    if(value.length > 2) {
      value = value[0] + value[1]
      e.target.value = value
    }
    const num = parseInt(value)
    if(num > 0){
      setValues(prev => {
        const newArray = [...prev]
        newArray[id] = num
        return newArray
      })
    } 
  }

  function handleSetOpen() {
    setOpen(prev => (!prev))
    setCustomTimes(values)
    localStorage.setItem('values', JSON.stringify(values))
    console.log('salvou')
  } 
  

  return(
    <>
      <ButtonConfigStyled onClick={handleSetOpen}>
        <img src={img} />
      </ButtonConfigStyled>
      <OverlayWrapperStyled open={open}>
        <div className="settingsBox">
          <h2>Config</h2>
          <div className="inputs">
            <div><input onChange={(e) => handleOnAdd(e, 0)} placeholder="00" type="number" /></div>
            <div><input onChange={(e) => handleOnAdd(e, 1)} placeholder="00" type="number" /></div>
            <div><input onChange={(e) => handleOnAdd(e, 2)} placeholder="00" type="number" /></div>
          </div>
          <button onClick={handleSetOpen}>Aplicar</button>
        </div>
      </OverlayWrapperStyled>
    </>
  )
}