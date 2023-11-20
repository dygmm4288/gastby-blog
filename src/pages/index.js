import * as React from "react"
import styled from "styled-components"
import FeaturedPost from "../components/FeaturedPost"
import Introduce from "../components/Introduce"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Introduce></Introduce>
      <FeaturedPost />
    </Layout>
  )
}
export const Head = () => <Seo title="ea-syno.dev" />
export default IndexPage

const StIntroduceWrapper = styled.div``
