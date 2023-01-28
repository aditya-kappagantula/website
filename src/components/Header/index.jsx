/** @jsx jsx */
import { jsx } from "theme-ui"
import { MenuButton, Flex} from 'theme-ui'
import { StaticImage } from "gatsby-plugin-image"

function Header() {
  return (
    <Flex sx={{
      alignItems: 'center',
      justifyContent: 'space-between',
      border: 'solid 1px black'
    }}>
      <StaticImage src="../../images/logo.png" 
        alt="Logo"
        placeholder="blurred"
        layout="fixed"
        width={48}
        height={48} 
      />
      <MenuButton aria-label="Toggle Menu" sx={{ display: ['block', 'none'] }} />
    </Flex>
  )
}

export default Header