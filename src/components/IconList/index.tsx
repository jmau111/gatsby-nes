import * as React from "react"

type IconListProps = {
  className?: string
  children?: React.ReactNode
}

const IconList: React.FunctionComponent<IconListProps> = ({ children, className }) => {
  const customClasses = [`icon-list`]

  if (className) {
    customClasses.push(className)
  }

  return <div className={customClasses.join(` `)}>{children}</div>
}

export default IconList
