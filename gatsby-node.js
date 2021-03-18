exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const weeknoteTemplate = require.resolve(`./src/templates/weeknoteTemplate.tsx`)
    const weeknotesTemplate = require.resolve(`./src/templates/weeknotesTemplate.tsx`)

    const adrTemplate = require.resolve(`./src/templates/adrTemplate.tsx`)
    const adrsTemplate = require.resolve(`./src/templates/adrsTemplate.tsx`)
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug,
                type
              }
            }
          }
        }
      }
    `)
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    createPage({
        path: 'week-notes',
        component: weeknotesTemplate,
        // context: {
        //   adrs: result.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.type === "week-note"),
        // },
      })
    console.log(JSON.stringify(result.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.type === "adr")))
    createPage({
        path: 'adrs',
        component: adrsTemplate,
        // context: {
        //   adrs: result.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.type === "adr"),
        // },
      })
    result.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.type === "week-note").forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: weeknoteTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
    result.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.type === "adr").forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: adrTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  }