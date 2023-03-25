import { ButtonStyled, ButtonsWrapperStyled } from "./buttons.styled";

import { buttonsValues } from "../../constants";

interface ButtonsType {
  active: number
  setActive: (value:number) => void
}

export function Buttons({active, setActive}: ButtonsType) {

  function handleSetActive(id:number) {
    setActive(id)
  }

  return (
    <ButtonsWrapperStyled>
      {buttonsValues.map((item) => {
        return(
          <ButtonStyled 
            key={item.id}
            active={ active === item.id }
            onClick={() => handleSetActive(item.id)}
          >
            {item.name}
          </ButtonStyled>
        )
      })}
    </ButtonsWrapperStyled>
  )
}