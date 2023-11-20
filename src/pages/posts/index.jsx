import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Posts = ({ location }) => {
  return <Layout location={location} />
}
export const Head = () => <Seo title={Posts} />
export default Posts
