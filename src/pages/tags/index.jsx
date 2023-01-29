import React from "react"
import { graphql } from "gatsby"
import getIcon from "../../utils/tagIcons"
import { Flex } from "theme-ui"
import PillButton from '../../components/PillButton'

const TagsListPage = ({ data }) => {
  return (
    <Flex>
      {  
        data.allMarkdownRemark.group.map(({ fieldValue }) => {
          const { component } = getIcon(fieldValue)
          return (
            <PillButton label={fieldValue}>
              {component}
            </PillButton>
          )
        })
      }
    </Flex>
  )
}

export const query = graphql`
  query TagsListPageQuery {
    allMarkdownRemark(limit: 2000) {
      group(field: { frontmatter: { tags: SELECT }}) {
        fieldValue
      }
    }
  }`

export default TagsListPage