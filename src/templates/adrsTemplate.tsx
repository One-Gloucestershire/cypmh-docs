import React from "react"
import { graphql } from "gatsby"
import { CYPMADocsHeader } from "../components/cypmh-docs-header"
import { CYPMADocsFooter } from "../components/cypmh-docs-footer"
import { Col, Container, Panel, Row } from "nhsuk-react-components"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  return (
        <main>
          <CYPMADocsHeader></CYPMADocsHeader>
          <Container>
            <Panel.Group>
              <Col width="one-quarter"><Panel></Panel></Col>
              {data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.type === "adr").map(edge =>
                <Col width="one-half" key={edge.node.frontmatter.date + edge.node.frontmatter.type}>
                  <Panel><h3>{edge.node.frontmatter.title}</h3><a href={edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</a></Panel>
                </Col>
              )}
            </Panel.Group>
            <Col width="one-quarter"><Panel></Panel></Col>
          </Container>
          <CYPMADocsFooter></CYPMADocsFooter>
        </main>
  )
}
export const pageQuery = graphql`
  query {
    allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title,
          slug,
          date,
          type
        }
      }
    }
  }
  }
`