import "../pages/styles.scss"
import React from "react"
import { graphql } from "gatsby"
import { CYPMADocsFooter } from "../components/cypmh-docs-footer"
import { CYPMADocsHeader } from "../components/cypmh-docs-header"
import { Col, Container, Panel } from "nhsuk-react-components"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
        <main>
          <CYPMADocsHeader></CYPMADocsHeader>
          <Panel.Group>
            <Container>
              <Col width="one-quarter"><Panel></Panel></Col>
              <Col width="one-half">
                <Panel label={frontmatter.title}>
                  <div
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </Panel>
              </Col>
              <Col width="one-quarter"><Panel></Panel></Col>
            </Container>
          </Panel.Group>
          <CYPMADocsFooter></CYPMADocsFooter>
        </main>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`