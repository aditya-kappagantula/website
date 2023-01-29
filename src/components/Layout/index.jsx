/** @jsx jsx */
import { jsx } from "theme-ui"
import { ContextProviderComponent } from "../Context"
import Header from '../Header'
import LeftNavMenu from '../LeftNavMenu'
import { Box, Flex } from "theme-ui"

function Layout({ children, pageContext }) {

  if (pageContext.layout === "special") {
    return (
      <ContextProviderComponent>
        <Header />
        {children}
      </ContextProviderComponent>
    )
  }
  return (
    <ContextProviderComponent>
      <Header />
      <Flex sx={{ flex: '1', color: 'text' }}>
        <Box sx={{display: ['none', 'block'], flexGrow: [0, 1], borderRight: '1px solid rgba(0, 0, 0, .2);', flex: 1}}>
          <LeftNavMenu />
        </Box>
        <Box sx={{ flex: '1 1 auto', flexGrow: [5] }}>
          {children}
        </Box>
      </Flex>
    </ContextProviderComponent>
  )
}

export default Layout