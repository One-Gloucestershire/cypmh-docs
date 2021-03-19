import "../pages/styles.scss"
import React from "react"
import { graphql, withPrefix } from "gatsby"
import { CYPMADocsFooter } from "../components/cypmh-docs-footer"
import { CYPMADocsHeader } from "../components/cypmh-docs-header"
import { Breadcrumb, Col, Container, Panel } from "nhsuk-react-components"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <main>
      <CYPMADocsHeader></CYPMADocsHeader>
      <Breadcrumb>
        <Breadcrumb.Item href={withPrefix("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item href={withPrefix("/week-notes")}>Weeknotes</Breadcrumb.Item>
        <Breadcrumb.Item>{frontmatter.title}</Breadcrumb.Item>
      </Breadcrumb>
      <Panel.Group>

        <Container>
          <Col width="one-quarter"><Panel></Panel></Col>
          <Col width="one-half">
            <Panel label={frontmatter.title}>
              {/* <h2>{frontmatter.date}</h2> */}
              <div
                className="blog-post-content"
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