import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import RightMenu from "../../components/RightMenu"
import PillButton from "../../components/PillButton"
/** @jsx jsx */
import { Flex, jsx } from "theme-ui"

export default function BlogPostTemplate({data}) {
  const { markdownRemark: { frontmatter: { title, date, featuredImage, tags, author }, html, tableOfContents } } = data
  const featuredImg = getImage(featuredImage?.childImageSharp?.gatsbyImageData)
  return (
    <Flex sx={{mx: 'l'}}>
      <Flex sx={{ flexDirection: 'column', flex: 1}}>
        <Flex sx={{ justifyContent: 'space-between' }}>
          <h4 sx={{ color: 'heading' }}>Author: {author}</h4>
          <h4 sx={{ color: 'heading' }}>{date}</h4>
        </Flex>
        <h1 sx={{ color: 'title' }}>{title}</h1>
        <Flex sx={{ flexDirection: 'row', flex: 1 }}>
          { tags.map(tag => <PillButton label={tag} url={`/tags/${tag}`} />) }
        </Flex>
        <div>
          <GatsbyImage image={featuredImg} alt={title} />
        </div>
        <div sx={{
          h1: { color: 'title' },
          h2: { color: 'title' },
          h3: { color: 'title' },
          h4: { color: 'title' },
          h5: { color: 'title' },
          h6: { color: 'title' },
          color: 'text'
        }} dangerouslySetInnerHTML={{ __html: html }} />
      </Flex>
      <RightMenu toc={tableOfContents} /> 
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
        author
        tags
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
      tableOfContents
    }
  }
`