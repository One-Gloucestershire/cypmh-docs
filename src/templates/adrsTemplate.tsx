import "../pages/styles.scss"
import React from "react"
import { graphql, Link, withPrefix } from "gatsby"
import { CYPMADocsHeader } from "../components/cypmh-docs-header"
import { CYPMADocsFooter } from "../components/cypmh-docs-footer"
import { Breadcrumb, Col, Container, Panel, Row } from "nhsuk-react-components"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  return (
    <main>
      <CYPMADocsHeader></CYPMADocsHeader>
      <Breadcrumb>
        <Breadcrumb.Item href={withPrefix("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item>ADRs</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Panel.Group>
          <Col width="full"><Panel><h2 style={{ marginTop: 36 }}>Architectural Decision Records</h2></Panel></Col>
          {data.allMarkdownRemark.edges.filter((edge:any) => edge.node.frontmatter.type === "adr").map((edge:any) =>
            <Col width="full" key={edge.node.frontmatter.date + edge.node.frontmatter.type}>
              <Panel><p><Link to={edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link> - {edge.node.frontmatter.date}</p></Panel>
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