import React from "react"
import { graphql } from "gatsby"
import { Flex } from "theme-ui"

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  return (
    <Flex sx={{ flexDirection: 'column', flex: 1 }}>
      Home Page:
    </Flex>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            tags
          }
        }
      }
    }
  }
`
export default IndexPage

export const Head = () => <title>Home Page</title>
