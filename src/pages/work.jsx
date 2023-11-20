import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const WorkPage = ({ location }) => {
  return <Layout location={location} />
}
export const Header = () => <Seo title="work" />
export default WorkPage
