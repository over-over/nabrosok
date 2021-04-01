import React from "react"
import { Link } from "gatsby"

type Props = {}

const IndexPage: React.FC<Props> = ({}) => {
  return (
    <div>
      Hello world!
      <Link to="home">Перейти на главную</Link>
    </div>
  )
}

export default IndexPage
