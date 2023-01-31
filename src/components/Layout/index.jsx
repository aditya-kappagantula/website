/** @jsx jsx */
import { jsx } from "theme-ui"
import { ContextProviderComponent } from "../Context"
import Header from '../Header'
import LeftNavMenu from '../LeftNavMenu'
import { Flex } from "theme-ui"

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
      <Flex sx={{ flex: 1, px: [null, 'l'], borderBottom: '1px solid rgba(0, 0, 0, .2);', }}>
        <Header />
      </Flex>
      <Flex sx={{ flex: 1, color: 'text', mx: [null, 'xl'] }}>
        <LeftNavMenu />
        <Flex sx={{ flex: 1 }}>
          {children}
        </Flex>
      </Flex>
    </ContextProviderComponent>
  )
}

export default Layout