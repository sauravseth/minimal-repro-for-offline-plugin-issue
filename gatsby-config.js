/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Minimal repro for offline plugin issue`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `Minimal repro`,
        short_name: `Minimal repro`,
        start_url: `/`,
        icon: `src/images/icon.png`,
        description: `Minimal repro to ease debugging`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        cache_busting_mode: "none",
    },
  },{
    resolve: `gatsby-plugin-offline`,
  },]
};