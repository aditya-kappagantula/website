
import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            siteUrl
            menuLinks {
              name
              link
              icon
              subMenu {
                name
                link
                icon
              }
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
