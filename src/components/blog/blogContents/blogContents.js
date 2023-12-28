import React from "react"
import { BlogContainer } from "./container.js"
import ReactMarkdown from "react-markdown"


const BlogPost = (props) => {
  return(
    <ReactMarkdown>{props.content}</ReactMarkdown>
  )
}

const foo = `# This is a title

This is a paragraph

## A secondary title

\`\`\`
code block
\`\`\`

---

YOU
`


export const BlogContents = (props) => {
  return(
    <BlogContainer>
      <h1>Hello</h1>
      <BlogPost content={foo}/>
    </BlogContainer>
  )

}
