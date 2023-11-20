import { Link } from "gatsby"
import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import theme from "../styles/theme"

const srcData = [
  { src: "/", name: "home" },
  { src: "/work/", name: "work" },
  { src: "/posts/", name: "post" },
]

const Layout = ({ children, location }) => {
  const [themeName, setThemeName] = React.useState("lightTheme")
  return (
    <ThemeProvider theme={theme[themeName]}>
      <GlobalStyle />
      <StWrapper>
        <StHeader>
          <Link to="/">
            <h1>Ea-Syno.dev</h1>
          </Link>
          <nav>
            <ul>
              {srcData.map(({ name, src }) => (
                <StNavItem key={src} $selected={location.pathname === src}>
                  <Link to={src}>{name}</Link>
                </StNavItem>
              ))}
            </ul>
          </nav>
        </StHeader>
        <StMain>{children}</StMain>
        <StFooter>
          <p>&copy;2023 이진호. All Rights Reserved.</p>
        </StFooter>
      </StWrapper>
    </ThemeProvider>
  )
}
export default Layout
const StWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`
const StHeader = styled.header`
  margin-top: 16px;
  margin-bottom: 16px;
  &,
  nav ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  align-items: baseline;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    line-height: 6rem;
    letter-spacing: -0.25rem;
  }
  padding: 0rem 1.32rem;
  /* background-color: red; */

  nav ul {
    gap: 1.32rem;
    align-items: flex-end;
  }
`
const StNavItem = styled.li`
  font-size: 1.48338rem;
  line-height: 3rem;
  color: var(--textColor);

  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0rem;
    left: 0;
    right: 0;
    border-radius: 1.2rem;
    height: 0;
    transition: height 0.25s ease-in;
    ${props =>
      props.$selected
        ? `
      height: 0.4rem;
      background-color: var(--primaryColor);
      `
        : ""}
  }
  &:hover::after {
    height: 0.4rem;
    background-color: var(--primaryColor);
  }
`
const StMain = styled.main`
  width: 43.10006rem;
  margin: 1rem auto;
`

const StFooter = styled.footer`
  * {
    text-align: center;
    height: 4rem;
    padding: 0.5rem 0.5rem;
    line-height: 4rem;
  }
`
