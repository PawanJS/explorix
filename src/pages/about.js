import React from "react"
import Layout from "../components/Ui/Layout/layout.component"
import Seo from "../components/Seo/Seo.component"
import Testimonials from "../components/Testimonials/Testimonial.component"
import Stats from "../components/Stats/Stats.component"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Testimonials />
    <Stats />
  </Layout>
)

export default IndexPage
