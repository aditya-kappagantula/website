/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex, Box, useColorMode } from 'theme-ui'

/**
const TocItem = ({ toc }) => {
  const subItem = (toc.items || []).map(item => (
    <ul key={item.url}>
      <TocItem toc={item} type="child" />
    </ul>
  ))

  return (
    <li key={toc.title}>
      <a href={toc.url}>{toc.title}</a>
      {subItem}
    </li>
  )
}

const TableOfContents = ({ toc }) => (
  <ul>
    {(toc.items || []).map((item, index) => (
      <TocItem key={index} toc={item} />
    ))}
  </ul>
)

function walk(node, func, output) {
  var children = node.childNodes;
  for (var i = 0; i < children.length; i++)  // Children are siblings to each other
      walk(children[i], func);
  func(node);
}

*/

function RightMenu({ toc }) {
  const [colorMode] = useColorMode()
  return (
    <Flex sx={{
      display: ['none', 'flex'], 
      borderLeft: colorMode, 
      px: 'l',
      position: 'fixed',
      pt: 'xl',
      top: 0,
      right: 'xl',
      bottom: 0,
      maxWidth: [null, '16rem'],
      flexDirection: 'column'
    }}>
      Table of Contents
      <Box sx={{ 
        fontSize: 'body',
        color: 'text'
      }} dangerouslySetInnerHTML={{ __html: toc }} />
    </Flex>
  )
}

export default RightMenu