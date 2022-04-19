import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Topic from "../components/Topic"

const NotFoundPage = () => {
  return (
    <Layout withHeader={false}>
      <Seo title="Page not found" description="error 404" />
      <Topic className="404">
        <h1>Page not found</h1>
        <p>
          Sorry{` `}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>
          {` `}we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === `development` ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link className="nes-btn is-primary" to="/">
            Go home
          </Link>
        </p>
      </Topic>
    </Layout>
  )
}

export default NotFoundPage
