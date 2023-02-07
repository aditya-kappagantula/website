import React from "react"
import { graphql } from "gatsby"
import { Flex } from "theme-ui"
import PostTile from '../../components/PostTile'

const BlogHomePage = ({ data: { allMarkdownRemark: { edges } } }) => {
  console.log(edges)
  return (
    <Flex sx={{ flexDirection: 'column', flex: 1 }}>
      Blog Home Page:
      <Flex sx={{ flexDirection: 'column', flex: 1 }}>
        { edges.map(edge => <PostTile data={edge} />) }
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
          }
          tableOfContents
        }
      }
    }
  }
`
export default BlogHomePage

export const Head = () => <title>Blog Home Page</title>
