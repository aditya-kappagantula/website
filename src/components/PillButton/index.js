/** @jsx jsx */
import { Box, jsx } from "theme-ui"
import { Flex, useColorMode } from "theme-ui"
import { navigate } from "gatsby"

function PillButton ({label, url, children}) {
  const [colorMode] = useColorMode()
  function navigateToRoute(e) {
    e.stopPropagation()
    navigate(url)
  }
  return (
    <Flex onClick={navigateToRoute}
    sx={{ 
      cursor: 'pointer',
      alignItems: 'center', 
      pr: 'xs',
      pl: 'xs',
      m: 'xxs',
      border: colorMode,
      borderRadius: 'm',
      height: 'fit-content'
    }}>
      {children} {label}
    </Flex>
  )
}

export default PillButton