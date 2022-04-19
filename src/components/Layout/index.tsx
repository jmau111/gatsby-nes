import * as React from "react"

import Social from "../Social"

import "../../styles/nes.min.css"
import "../../styles/reset.css"
import "../../styles/styles.scss"

type LayoutProps = {
  withHeader?: boolean
  title?: string
  description?: string
  children?: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title, description, withHeader = true }) => {
  return (
    <>
      {withHeader && (
        <header className="header">
          <div className="inner">
            <div className="nav-brand">
              <a href="/">
                <h1 id="title">
                  <i aria-hidden="true" className="snes-jp-logo brand-logo"></i> {title}
                </h1>
              </a>
              <p className="description">{description}</p>
            </div>
            <Social />
          </div>
        </header>
      )}
      <main aria-labelledby="title">{children}</main>
      <footer className="footer">
        &copy; {new Date().getFullYear()} {title}
      </footer>
    </>
  )
}

export default Layout
