/** @jsx jsx */
import { jsx, Flex, useColorMode} from 'theme-ui'
import getIcon from "../../utils/tagIcons"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PillButton from '../../components/PillButton'
import { navigate } from "gatsby"

function PostTile({ data: { node: { excerpt, frontmatter: { slug, tags, title, featuredImage }}} }) {
  const image = getImage(featuredImage?.childImageSharp?.gatsbyImageData)
  const [colorMode] = useColorMode()
  function navigateToRoute(url) {
    navigate(`/blog${slug}`)
  }
  return (
    <Flex sx={{ 
      p: 'xs',
      m: 'xs',
      border: colorMode,
      flexDirection: 'column',
      cursor: 'pointer'
    }} onClick={navigateToRoute}>
      <Flex>
        { excerpt }
        <GatsbyImage image={image} alt={title} sx={{ minWidth: '200px' }} />
      </Flex>
      <Flex sx={{ flexWrap: 'wrap' }}>
        {  
          tags.map(tag => {
            const icon = getIcon(tag)
            return (
              <PillButton label={tag} url={`/tags/${tag}`}>
                {icon}
              </PillButton>
            )
          })
        }
      </Flex>
    </Flex>
  )
}

export default PostTile