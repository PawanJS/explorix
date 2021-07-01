import React from "react"
import Footer from "../../Footer/Footer.component"
import Header from "../../Header/Header.component"
import { GlobalStyle } from "../../styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
