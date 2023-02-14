/** @jsx jsx */
import { Flex, useColorMode, jsx } from "theme-ui"
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
      fontSize: 'small',
      height: 'fit-content',
      backgroundColor: 'britishGreen',
      fontWeight: 'highlight',
      color: 'buttonText'
    }}>
      {children} {label}
    </Flex>
  )
}

export default PillButton