import dotenv from "dotenv";
import type { GatsbyConfig } from "gatsby";

dotenv.config();

const title = "We Travel";
const pathPrefix = "/infnet-gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title,
    description: "Um site de viagens",
    image: `${pathPrefix}/icon.png`,
    keywords: ["We Travel", "Clone", "Projeto", "Infnet"],
    siteUrl: `https://gjdotto.github.io`,
    pathPrefix,
  },
  pathPrefix,
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: title,
        start_url: "/",
        background_color: "#eee",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    "styled-jsx/babel",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-styled-jsx",
    "gatsby-plugin-styled-components"
  ],
};

export default config;
