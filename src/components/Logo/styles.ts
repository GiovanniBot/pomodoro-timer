import styled from 'styled-components'

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    &:focus {
      box-shadow: none;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }
`
