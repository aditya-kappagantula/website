import React from "react"
import { graphql } from 'gatsby'

const BlogHomePage = ({ data }) => {
  console.log(data)
  return <div>Hello!</div>
}

export const query = graphql`
  query BlogHomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }`

export default BlogHomePage
