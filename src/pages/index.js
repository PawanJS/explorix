import React from "react"
import Hero from "../components/Hero/Hero.component"
import Layout from "../components/Ui/Layout/layout.component"
import Seo from "../components/Seo/Seo.component"
import Trips from "../components/Trips/Trip.component"
import Testimonials from "../components/Testimonials/Testimonial.component"
import Stats from "../components/Stats/Stats.component"
import Email from "../components/Contact/Email.component"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="Our Favorites Destinations" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
