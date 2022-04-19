import * as React from "react"

const sns = [
  {
    text: `Twitter`,
    icon: `twitter`,
    url: `https://twitter.com/gatsbyjs/`,
  },
  {
    text: `LinkedIn`,
    icon: `linkedin`,
    url: `https://linkedin.com/`,
  },
  {
    text: `Instagram`,
    icon: `instagram`,
    url: `https://Instagram.com/`,
  },
  {
    text: `GitHub`,
    icon: `github`,
    url: `https://github.com/jmau111/gatsby-nes`,
  },
]

const Social = () => {
  return (
    <div className="social-buttons nes-balloon from-left">
      <p>Share it:</p>
      <ul className="share">
        {sns.map(link => (
          <li key={link.url}>
            <a href={link.url}>
              <i aria-hidden="true" className={`${link.icon} nes-icon`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Social
