import * as React from "react"

type SectionProps = {
  className?: string
  title?: string
  children?: React.ReactNode
}

const Section: React.FunctionComponent<SectionProps> = ({ children, title, className }) => {
  const customClasses = [`nes-container with-title`]

  if (className) {
    customClasses.push(className)
  }

  return (
    <section className={customClasses.join(` `)}>
      <h2 className="title">{title}</h2>
      {children}
    </section>
  )
}

export default Section
