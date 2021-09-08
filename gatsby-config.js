module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ducdk-blog",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-theme-hello-friend-ng",
      options: {
        contentPath: "content",
        blog: {
          create: true,
          path: "posts",
          title: "Posts",
          description: "Demo page blog"
        },
        mode: {
          default: "dark",
          allowChange: true,
        },
        menuLinks: [
          {
            name: "Posts",
            link: "/posts",
          },
          {
            name: "Works",
            link: "/works",
          },
        ],
      },
    },
  ],
  siteMetadata: {
    title: "Hello Friend NG",
    titleTemplate: "%s – Demo Page",
    url: "https://filipkrw.github.io/gatsby-theme-hello-friend-ng",
    description: "Demo page for Hello Friend NG theme for Gatsby",
  },
};
