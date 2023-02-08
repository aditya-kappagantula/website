/** @jsx jsx */
import { jsx } from "theme-ui"
import { ContextProviderComponent } from "../Context"
import Header from '../Header'
import LeftNavMenu from '../LeftNavMenu'
import { Flex, useColorMode } from "theme-ui"

function Layout({ children, pageContext }) {
  const [colorMode] = useColorMode()
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
      <Flex sx={{ 
        flex: 1, 
        px: [null, 'l'], 
        width: '100%', 
        borderBottom: colorMode,
        position: 'fixed',
        background: 'background', 
        zIndex: 999 
      }}>
        <Header />
      </Flex>
      <Flex sx={{ flex: 1, mx: [null, 'xl'], mt: 'xl', height: '100%' }}>
        <LeftNavMenu />
        <Flex sx={{ flex: 1, mx: [null, 'xxxl'] }}>
          {children}
        </Flex>
      </Flex>
    </ContextProviderComponent>
  )
}

export default Layout