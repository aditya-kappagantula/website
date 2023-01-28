/** @jsx jsx */
import { jsx } from "theme-ui"
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { Flex } from 'theme-ui'

function LeftNavMenu() {
  const { menuLinks } = useSiteMetadata()
  return (
    <Flex>
      <ul
        sx={{
          listStyle: "none",
          background: "darkorange",
          margin: 0,
          padding: 0,
        }}
      >
        {menuLinks.map((link) => (
          <li key={link.name}>
            <a
              sx={{
                color: "white",
                textDecoration: "none",
              }}
              href={link.link}
            >
              {link.name}
            </a>
            {link.subMenu && link.subMenu.length > 0 ? (
              <ul>
                {link.subMenu.map((subLink) => (
                  <li key={subLink.name}>
                    <a
                      sx={{
                        color: "white",
                        textDecoration: "none",
                      }}
                      href={subLink.link}
                    >
                      {subLink.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </Flex>
  )
}

export default LeftNavMenu