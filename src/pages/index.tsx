import * as React from "react"
import { graphql } from "gatsby"

import type { PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Topic from "../components/Topic"
import Showcase from "../components/Showcase"
import IconList from "../components/IconList"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

const links = [
  {
    text: `Getting started with NES.css`,
    url: `https://nostalgic-css.github.io/NES.css/`,
    description: `There's more here. Go check the official demo for the Framework.`,
  },
  {
    text: `GitHub repo`,
    url: `https://github.com/nostalgic-css/NES.css`,
    description: `Go grab some info on the official GitHub repository`,
  },
]

const listNintendo = [`mario`, `ash`, `pokeball`, `kirby`, `bulbasaur`, `charmander`, `squirtle`]

const listSns = [
  `twitter`,
  `facebook`,
  `instagram`,
  `github`,
  `google`,
  `gmail`,
  `medium`,
  `linkedin`,
  `twitch`,
  `youtube`,
  `reddit`,
  `whatsapp`,
]

const IndexPage = ({ data: { site } }: PageProps<DataProps>) => {
  return (
    <Layout title={site.siteMetadata.title} description={site.siteMetadata.description}>
      <Seo
        title={site.siteMetadata.title}
        description={site.siteMetadata.description}
        author={site.siteMetadata.author}
      />
      <Topic title="About" className="about">
        <p>
          Small demo using Gatsby and NES.css, <br />a NES-style (8bit-like) CSS Framework.
        </p>
      </Topic>
      <Showcase title="Nintendo characters">
        <IconList>
          {listNintendo.map(icon => (
            <i key={icon} className={`nes-${icon}`}></i>
          ))}
        </IconList>
        <p className="note nes-text is-error">
          Nintendo owns the copyright of these characters. Please comply with the Nintendo guidelines and laws of the
          applicable jurisdiction.
        </p>
      </Showcase>
      <Showcase title="Icons - misc">
        <IconList>
          <i className="nes-icon close is-large"></i>
          <i className="nes-icon trophy is-large"></i>
          <i className="nes-icon coin is-large"></i>
          <i className="nes-logo"></i>
          <i className="nes-jp-logo"></i>
          <i className="snes-logo"></i>
          <i className="snes-jp-logo"></i>
          <i className="nes-octocat animate"></i>
        </IconList>
      </Showcase>
      <Showcase title="Icons - social networks">
        <IconList>
          {listSns.map(icon => (
            <i key={icon} className={`nes-icon ${icon} is-large`}></i>
          ))}
        </IconList>
      </Showcase>
      <Showcase title="Some links">
        <ul>
          {links.map(link => (
            <li key={link.url}>
              <span>
                <a href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}>
                  {link.text}
                </a>
                <p>{link.description}</p>
              </span>
            </li>
          ))}
        </ul>
      </Showcase>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
