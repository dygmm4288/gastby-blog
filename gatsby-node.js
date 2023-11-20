/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
exports.createResolvers = ({ createResolvers, _, getNodesByType }) => {
  createResolvers({
    ContentfulPost: {
      // contentful post 이름
      thumbnailLocalImage: {
        // 썸네일 필드 이름
        type: `File`,
        resolve: async (source, args, context, info) => {
          const image = getNodesByType("File").filter(
            file => file.relativePath === source.thumbnailLocal
          )
          return image[0] // 배열이 아닌 값을 반환해야한다.
        },
      },
    },
  })
}
