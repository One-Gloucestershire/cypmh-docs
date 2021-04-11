import "../pages/styles.scss"
import React from "react"
import { graphql, Link, withPrefix } from "gatsby"
import { CYPMADocsHeader } from "../components/cypmh-docs-header"
import { CYPMADocsFooter } from "../components/cypmh-docs-footer"
import { Breadcrumb, Col, Container, Panel, Row, ContentsList } from "nhsuk-react-components"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  return (
    <main>
      <CYPMADocsHeader></CYPMADocsHeader>
      <Breadcrumb>
        <Breadcrumb.Item href={withPrefix("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item >Weeknotes</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Panel.Group>
          <Col width="full"><Panel><h2 style={{ marginTop: 36 }}>Weeknotes</h2></Panel></Col>
          <Panel><ContentsList aria-label="Weeknotes">
          {data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.type === "week-note").map(edge =>
            <ContentsList.Item href={`/cypmh-docs/${edge.node.frontmatter.slug}`}>
              {edge.node.frontmatter.title}
            </ContentsList.Item>)
          }
          </ContentsList></Panel>
        </Panel.Group>
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