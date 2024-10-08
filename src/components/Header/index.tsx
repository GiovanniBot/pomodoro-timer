import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import { Logo } from '../Logo'

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
