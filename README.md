# Gatsby NES

A theme built with Typescript, Gatsby, and [NES.css](https://nostalgic-css.github.io/NES.css/) for a One-page layout.

[See live demo](https://demos.julien-maury.dev/gatsby-nes)

No option, but it's easy to start.

## Features

Pretty limited for now (on purpose):

* One-page layout
* very basic SEO
* styled 404

For more customizations with the NES.css framework, check their nice documentation.

## Warning

This theme is only a nostalgic tribute to Nintendo. It's easy to customize it but it's pretty light in terms of features.

## 🌪 Starting NES

```
git clone https://github.com/jmau111/gatsby-nes.git and cd gatsby-nes && yarn && yarn dev
```

Then customize the favicon in `./images/`.

## Check types

As the idea with TypeScript is to type, there's a command for that:

```
yarn typecheck
```

## 🎃 Change styles

If you know what you're doing, you can tweak stylews in `./src/styles`. The theme does not use styled components but basic SASS.

Don't remove `import "nes.css/css/nes.min.css";` I add in the main Layout  `./src/components/Layout/index.tsx`. Otherwise, you would lose the import of NES.css.

## Change siteURL

Open `./gatsby-config.ts` and modify:

```js
  pathPrefix: `/gatsby-nes`,
  siteMetadata: {
    title: `Gatsby nes`,
    author: `Julien Maury`,
    about: `A Gatsby Theme using typescript and Nostalgic NES css`,
    description: `A nostalgic Gatsby theme`,
    siteUrl: `https://demos.julien-maury.dev`,
  },
```

I use `pathPrefix` because I host the demo in a subfolder, but **you don't have to use this parameter if your production URL is a root URL**. 

## Google Analytics

If you need google, add the plugin:

```
npm install gatsby-plugin-google-analytics
```

Then, add the entry in `./gatsby-config.js`:

```js
   {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `XXXX`,// replace with yours
      },
    },
```

Also consider alternatives such as [Gatsby Matomo](https://www.gatsbyjs.com/plugins/gatsby-plugin-matomo/) instead.

## humans.txt

We are humans, not machines. The humans.txt file is a tribute to the people who have contributed to the building of a website.
Go modify `./static/humans.txt` with your team info.

## Weird issues

If you have some issues with static images and queries, you might save a lot of time by using the custom yarn command:

```
yarn cleandev
``` 

It will execute `gatsby clean` before `gatsby develop`, which deletes the cache folder and ensures there's no outdated stuff that can jam your app.

## Todo

This theme is barebone (on purpose). It's meant for One-page Layouts, not blogs or complex hierarchies.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this theme starter.

    ```shell
    # create a new Gatsby site using this theme starter
    gatsby new my-themed-site https://github.com/jmau111/gatsby-nes
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-themed-site/
    yarn dev
    ```

3.  **Open the code and start customizing!**

    Your site is now running at `http://localhost:8000`!

    To get started, check out the guide to [getting started with using multiple themes](https://github.com/jmau111/gatsby-nes), or the [general themes docs](https://gatsbyjs.com/docs/themes).

## About Preact

The theme uses [Preact](https://preactjs.com/), a much lighter alternative of React. Most gatsby websites and plugins will work fine, but some of them might be incompatible with it.

Be careful.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/).

Here are some places to start:

### Themes

- To learn more about Gatsby themes specifically, we recommend checking out the [theme docs](https://www.gatsbyjs.com/docs/themes/).

### General

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
