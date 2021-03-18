module.exports = {
  siteMetadata: {
    title: "CYPMH Documentation",
      siteUrl: `http://locahost:8000`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-sitemap",
  ],
  pathPrefix: "/CYPMH-DOCS",
};
