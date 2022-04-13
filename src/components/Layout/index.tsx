import * as React from "react"

import type { PageProps } from "gatsby";

import Social from "../Social"

type LayoutProps = {
  className?: string
  title?: string
  description?: string
}

const Layout: React.FunctionComponent<LayoutProps> = ({
    children,
    title,
    description,
    className
}) => {
  return (
    <>
      <header className="header">
        <div className="inner">
          <div className="nav-brand">
            <a href="/">
              <h1 id="title">
                <i aria-hidden="true" className="snes-jp-logo brand-logo"></i>
              {" "}{title}
              </h1>
            </a> 
            <p className="description">{description}</p>
          </div> 
          <Social />
        </div>
      </header>
      <main aria-labelledby="title">
        {children}
      </main>
      <footer className="footer">
        &copy; {new Date().getFullYear()}{" "}{title}
      </footer>
    </>
  )
}

export default Layout