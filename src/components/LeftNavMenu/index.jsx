/** @jsx jsx */
import { jsx } from "theme-ui"
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { Flex, Link, useColorMode } from 'theme-ui'
import getIcon from '../../utils/tagIcons'

function LeftNavMenu() {
  const [colorMode] = useColorMode()
  const { menuLinks } = useSiteMetadata()
  return (
    <Flex sx={{
      display: ['none', 'flex'], 
      borderRight: colorMode,
      px: 'l',
      position: 'fixed',
      pt: 'xl',
      top: 0,
      bottom: 0
    }}>
      <nav>
        <ul sx={{ listStyle: "none", flex: 1 }}>
          {menuLinks.map((link) => (
            <li key={link.name} sx={{ m: 's', cursor: 'pointer' }}>
              <Flex sx={{ alignItems: 'center', ':hover': { color: 'highlightText'} }}>
                {getIcon(link.icon)}
                <a href={link.link}>{link.name}</a>
                {/* <Link sx={{':hover': { color: 'highlightText'}}} href={link.link}>{link.name}</Link> */}
              </Flex>
              {link.subMenu && link.subMenu.length > 0 ? (
                <ul>
                  {link.subMenu.map((subLink) => (
                    <li key={subLink.name}>
                      <Link href={subLink.link}>{subLink.name}</Link>  
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </Flex>
  )
}

export default LeftNavMenu