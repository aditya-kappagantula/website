/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { graphql } from "gatsby"
import PostTile from '../../components/PostTile'

const Tags = ({ data: { allMarkdownRemark: { edges } } }) => {
  return (
    <Flex sx={{ flexDirection: 'column', flex: 1 }}>
      Tags Page:
      <Flex sx={{ flexDirection: 'column', flex: 1 }}>
        { edges.map(edge => <PostTile data={edge} />) }
      </Flex>
    </Flex>
  )
} 

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC }}
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            title
            slug
            tags
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 800, height: 400)
              }
            }
          }
        }
      }
    }
  }
`