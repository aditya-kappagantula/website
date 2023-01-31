import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import RightMenu from "../../components/RightMenu"
import { Flex } from "theme-ui"

export default function BlogPostTemplate({ data }) {
  const { markdownRemark: { frontmatter: { title, date, featuredImage }, html } } = data // data.markdownRemark holds your post data
  console.log(featuredImage)
  let featuredImg = getImage(featuredImage?.childImageSharp?.gatsbyImageData)
  return (
    <Flex>
      <Flex sx={{ flexDirection: 'column', flex: 1}}>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <div>
          <GatsbyImage image={featuredImg} alt={title} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Flex>
      <RightMenu />
    </Flex>
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