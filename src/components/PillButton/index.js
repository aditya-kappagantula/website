/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex } from "theme-ui"
function PillButton ({label, children}) {
  return (
    <Flex sx={{ 
      alignItems: 'center', 
      margin: 'xs'
    }}>
      {children} {label}
    </Flex>
  )
}

export default PillButton