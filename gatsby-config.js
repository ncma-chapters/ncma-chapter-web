module.exports = {
  siteMetadata: {
    title: 'NCMA Chapter Website',
  },
  plugins: [
    // Required for creating a PWA: Adds a manifest.json file for offline access.
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'NCMA Chapter Website',
        short_name: 'NCMA Chapter',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#744C9E',
        display: 'standalone',
        icon: 'src/assets/images/icon.png',
      },
    },
    // Required for creating a PWA: Adds a service worker for offline access.
    // WARNING: Must be listed *after* 'gatsby-plugin-manifest'.
    'gatsby-plugin-offline',
    // The plugin creates File nodes from files.
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pageImports`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
      },
    },
    // Create an RSS feed (or multiple feeds) for your Gatsby site.
    `gatsby-plugin-feed`,
    // This is used to allow for absolute imports.
    'gatsby-plugin-root-import',
    // Attributes you add in their component, e.g. title, meta attributes, etc. will get added to the static HTML pages Gatsby builds.
    'gatsby-plugin-react-helmet',
    // Peer dependency for styled-components.
    'gatsby-plugin-styled-components',
    // Creates ImageSharp nodes from image types that are supported by the Sharp image processing library.
    'gatsby-transformer-sharp',
    // Utilized for image compression.
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
  ],
};
