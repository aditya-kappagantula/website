exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/special-page/)) {
    page.context.layout = "special"
    createPage(page)
  }
}