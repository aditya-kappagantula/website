import { graphql } from "gatsby"
/** @jsx jsx */
import { Flex, jsx } from "theme-ui"
import PostTile from '../../components/PostTile'

const BlogHomePage = ({ data: { allMarkdownRemark: { edges } } }) => {
  return (
    <Flex sx={{ flexDirection: 'column', flex: 1 }}>
      <h1 sx={{ color: 'title' }}>Blog</h1>
      <Flex sx={{ flexDirection: 'column', flex: 1 }}>
        { edges.map((edge, index) => <PostTile key={index} data={edge} />) }
      </Flex>
    </Flex>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {}, sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            slug
            tags
            title
            author
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 200, height: 100)
              }
            }
          }
          tableOfContents
        }
      }
    }
  }
`
export default BlogHomePage

export const Head = () => <title>Blog Home Page</title>
