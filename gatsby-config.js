module.exports = {
  siteMetadata: {
    title: `Tools, Media, and What's Next`,
    author: 'Marlon Kuzmick',
    description: `The first of 31 daily Gatsby sites I'll make this month.`,
    image: '/static/mk-gatsby-20210101-screenshot.png'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
