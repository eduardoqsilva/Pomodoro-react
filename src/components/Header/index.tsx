import { ReactNode } from "react";
import { HeaderStyled } from "./header.styled";


interface HeaderType {
  children: ReactNode
}

export function Header({children}:HeaderType) {
  return(
    <HeaderStyled>
        {children}
    </HeaderStyled>
  )
}