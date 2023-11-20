import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import GlobalStyle from "../styles/GlobalStyles"
import theme from "../styles/theme"

const srcData = [
  { src: "/", name: "home" },
  { src: "/work", name: "work" },
  { src: "/posts", name: "post" },
]

const Layout = ({ pageTitle, children }) => {
  const [themeName, setThemeName] = useState("lightTheme")
  return (
    <>
      <GlobalStyle theme={theme[themeName]} />
      <StHeader>
        <h1>지노.dev</h1>
        <nav>
          <ul>
            {srcOfLink.map(({ name, src }) => (
              <li>
                <Link to={src}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </StHeader>
      {children}
      <StFooter></StFooter>
    </>
  )
}
export default Layout

const StHeader = styled.header``
const StFooter = styled.footer``
