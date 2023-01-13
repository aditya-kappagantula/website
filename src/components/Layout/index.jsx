import * as React from "react"
import { ContextProviderComponent } from "../Context"
import Header from '../Header'
import Footer from '../Footer'

function Layout({ children, pageContext }) {

  if (pageContext.layout === "special") {
    return (
      <ContextProviderComponent>
        <Header />
        {children}
        <Footer />
      </ContextProviderComponent>
    )
  }
  return (
    <ContextProviderComponent>
      <Header />
      {children}
      <Footer />
    </ContextProviderComponent>
  )
}

export default Layout