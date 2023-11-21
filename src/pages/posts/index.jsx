import * as React from "react"
import PostCategory from "../../components/PostCategory"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Posts = ({ location }) => {
  return (
    <Layout location={location}>
      <PostCategory></PostCategory>
    </Layout>
  )
}
export const Head = () => <Seo title={Posts} />
export default Posts
