import * as React from "react"
import { ContextProviderComponent } from "../Context"
import Header from '../Header'
import LeftNavMenu from '../LeftNavMenu'
import Footer from '../Footer'
import { Box, Flex } from "theme-ui"

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
      <Flex sx={{ flex: '1 1 auto' }}>
        <Box sx={{display: ['none', 'block'], flexGrow: [0, 1]}}>
          <LeftNavMenu />
        </Box>
        <Box bg="secondary" color="white" sx={{ flex: '1 1 auto', flexGrow: [5] }}>
          {children}
        </Box>
      </Flex>
      <Footer />
    </ContextProviderComponent>
  )
}

export default Layout