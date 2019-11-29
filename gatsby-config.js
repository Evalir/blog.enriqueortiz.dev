module.exports = {
  siteMetadata: {
    title: `Enrique Ortiz | Blog`,
    name: `Enrique Ortiz`,
    siteUrl: `https://blog.enriqueortiz.dev`,
    description: `Building my dreams, line by line. Blog from Enrique Ortiz`,
    hero: {
      heading: `Thoughts, and some dreams.`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/hievalir`
      },
      {
        name: `github`,
        url: `https://github.com/evalir`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/henry.codes`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/enriqueortizpi/`
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/evalir`
      }
    ]
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
};
