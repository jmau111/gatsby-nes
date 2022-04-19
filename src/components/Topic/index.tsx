import * as React from "react"

type TopicProps = {
  className?: string
  title?: string
  children?: React.ReactNode
}

const Topic: React.FunctionComponent<TopicProps> = ({ children, title, className }) => {
  const customClasses = [`topic`]

  if (className) {
    customClasses.push(className)
  }

  return (
    <section className={customClasses.join(` `)}>
      {title && (
        <h2 id={className}>
          <a href={`#${className}`}>#</a>
          {` `}
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}

export default Topic
