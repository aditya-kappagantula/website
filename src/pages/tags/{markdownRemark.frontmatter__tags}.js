import React from "react"
import { Router } from "@reach/router"
import Header from '../../components/Header'
// Components
import { Link, graphql } from "gatsby"

const Tags = ({data}) => {  
  console.log('--->', data)
  return (
    <div>
      hi there!
    </div>
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
          }
        }
      }
    }
  }
`