import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <ul>
        {data.allFile.nodes.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </Layout>
  )
}
export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`
export const Head = () => <Seo title="Blog Page" />
export default BlogPage
