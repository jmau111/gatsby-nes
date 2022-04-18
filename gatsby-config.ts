import type {GatsbyConfig} from "gatsby";

const plugins: GatsbyConfig['plugins'] = [
  "gatsby-plugin-preact",
  "gatsby-plugin-sass", 
  "gatsby-plugin-image",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  {
    resolve: "gatsby-source-filesystem",
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, 
  {
    resolve: "gatsby-source-filesystem",
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, 
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Gatsby Nes",
      short_name: "Nes",
      start_url: "/",
      background_color: "#fafafa",
      theme_color: "#0000ff",
      display: "minimal-ui",
      icon: "src/images/icon.png",
    },
  },
  {
    resolve: "gatsby-plugin-offline",
  }
];

const siteMetadata: GatsbyConfig["siteMetadata"] = {
    title: "Gatsby NES",
    siteUrl: "https://demos.julien-maury.dev",
    description: "powered by NES.CSS",
    author: "Julien Maury"
};

const pathPrefix: GatsbyConfig["pathPrefix"] = "/gatsby-nes";

const config: GatsbyConfig = {
  pathPrefix,
  siteMetadata,
  plugins
};

export default config;