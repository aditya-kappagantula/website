/** @jsx jsx */
import { jsx } from "theme-ui"
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { Flex, Link } from 'theme-ui'
import getIcon from '../../utils/tagIcons'

function LeftNavMenu() {
  const { menuLinks } = useSiteMetadata()
  return (
    <Flex sx={{display: ['none', 'flex'], borderRight: '1px solid rgba(0, 0, 0, .2);', px: '2rem', }}>
      <nav>
        <ul sx={{ listStyle: "none", flex: 1 }}>
          {menuLinks.map((link) => (
            <li key={link.name} sx={{ m: 's', cursor: 'pointer' }}>
              <Flex sx={{ alignItems: 'center' }}>
                {getIcon(link.icon)}
                <Link href={link.link}>{link.name}</Link>
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