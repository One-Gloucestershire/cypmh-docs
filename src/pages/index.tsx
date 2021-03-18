import "./styles.scss"

import * as React from "react"
import { CYPMADocsHeader } from "../components/cypmh-docs-header"
import { CYPMADocsFooter } from "../components/cypmh-docs-footer"


// markup
const IndexPage = () => {
  return (
    <main>
      <CYPMADocsHeader></CYPMADocsHeader>
      <CYPMADocsFooter></CYPMADocsFooter>
    </main>
  )
}

export default IndexPage
