import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function BlogPostTemplate({
  pageContext, data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark: { frontmatter: { title, date, featuredImage }, html } } = data // data.markdownRemark holds your post data
  console.log(featuredImage)
  let featuredImg = getImage(featuredImage?.childImageSharp?.gatsbyImageData)
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <GatsbyImage image={featuredImg} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              height: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`