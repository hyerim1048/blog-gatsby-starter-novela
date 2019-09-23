module.exports = {
  siteMetadata: {
    title: `Plimground by Henie`,
    name: `Plimground`,
    siteUrl: `https://plimground.netlify.com/`,
    description: `This site is a place for programming ,math, science and all about data`,
    hero: {
      heading: `Welcome to Plimground.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/hyerim1048`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-remark-katex`,
      options: {
        // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
        strict: `ignore`
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `plimground-netlify-com`
      }
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Plimground by Henie`,
        short_name: `Plimground`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
