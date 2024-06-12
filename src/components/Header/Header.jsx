import { useState, useEffect } from 'react'
import logo from '../../assets/react.svg'
import styled, { keyframes } from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 0.8em;
`
// Styled component for img
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img`
  margin: 0 0.4em 0.2em 0.4em;
  animation: ${rotate} 3s linear infinite;
`

function Header() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval) // To clean up the interval on component unmount
  }, [])

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <span>The time is: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  )
}

export default Header
