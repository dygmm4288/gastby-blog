import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = ({ data }) => {
  console.log(data)
  return (
    <Layout pageTitle="Blog">
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted : {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  )
}
export const query = graphql`
  query MyQuery {
    allMdx {
      nodes {
        frontmatter {
          title
          date
          slug
        }
        excerpt
      }
    }
  }
`
export const Head = () => <Seo title="Blog Page" />
export default BlogPage
