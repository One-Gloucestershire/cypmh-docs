import "./styles.scss"

import * as React from "react"
import { CYPMADocsHeader } from "../components/cypmh-docs-header"
import { CYPMADocsFooter } from "../components/cypmh-docs-footer"
import { Breadcrumb, Hero } from "nhsuk-react-components"

// markup
const IndexPage = () => {
  return (
    <main>
      <CYPMADocsHeader></CYPMADocsHeader>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <Hero>
        <Hero.Heading>One Gloucestershire - Children &amp; Young Peoples' Mental Health documentation site</Hero.Heading>
        <Hero.Text>Documenting the progress in helping children &amp; young people get the help they need.</Hero.Text>
      </Hero>
      <CYPMADocsFooter></CYPMADocsFooter>
    </main>
  )
}

export default IndexPage
