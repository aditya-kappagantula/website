/** @jsx jsx */
import { jsx } from "theme-ui"
import { MenuButton, Flex, useColorMode, IconButton} from 'theme-ui'
import { StaticImage } from "gatsby-plugin-image"
import { BsBrightnessHighFill } from "@react-icons/all-files/bs/BsBrightnessHighFill"

function Header() {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Flex sx={{
      alignItems: 'center',
      justifyContent: 'space-between',  
      flex: 1,
      px: [null, 'xl'],
    }}>
      <StaticImage src="../../images/logo.png"  
        sx={{ m: 'xs' }}
        alt="Logo"
        placeholder="blurred"
        layout="fixed"
        width={48}
        height={48} 
      />
      <Flex>
        <IconButton sx={{ m: 'xs' }} onClick={(e) => {
            setColorMode(colorMode === 'light' ? 'dark' : 'light')
        }}>
          <BsBrightnessHighFill sx={{width: '24px', height: '24px', color: colorModeIcon}} />
        </IconButton>
        <MenuButton aria-label="Toggle Menu" sx={{ display: ['block', 'none'], m: 'xs' }} />
      </Flex>
    </Flex>
  )
}

export default Header