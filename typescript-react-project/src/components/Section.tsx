import { ReactNode } from "react"

type SectionProps = {
    title?: string,
    children: ReactNode
}

const Section = ({ title, children}: SectionProps ) => {
  return (
    <>
        <h2>{title}</h2>
        <div>{children}</div>
    </>
  )
}

export default Section