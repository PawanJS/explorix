import React from "react"
import Layout from "../components/Ui/Layout/layout.component"
import Seo from "../components/Seo/Seo.component"
import Trips from "../components/Trips/Trip.component"
import Email from "../components/Contact/Email.component"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Trips heading="Our Favorites Destinations" />
    <Email />
  </Layout>
)

export default IndexPage
