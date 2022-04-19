import React from "react"
import Helmet from "react-helmet"

type SEOProps = {
  description?: string
  lang?: string
  author?: string
  title: string
}

const SEO: React.FunctionComponent<SEOProps> = ({ description, lang, author, title }) => {
  const metaDescription = description || description

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ]}
      />
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  title: ``,
  author: ``,
  description: ``,
}

export default SEO
