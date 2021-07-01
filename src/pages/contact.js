import React from "react"
import Layout from "../components/Ui/Layout/layout.component"
import Seo from "../components/Seo/Seo.component"
import Email from "../components/Contact/Email.component"

const ContactPage = () => (
  <Layout>
    <Seo title="Home" />
    <Email />
  </Layout>
)

export default ContactPage
