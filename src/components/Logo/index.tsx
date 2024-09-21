import { NavLink } from 'react-router-dom'
import { LogoContainer } from './styles'

import logoEncTimer from '../../assets/logoEncTimer.png'

export function Logo() {
  return (
    <LogoContainer>
      <NavLink to="/">
        <img src={logoEncTimer} />
      </NavLink>
    </LogoContainer>
  )
}
