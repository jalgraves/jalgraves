import React, { useState, useEffect } from "react"
import Markdown from "react-markdown"
import { ContentSection } from "@jalgraves/react-components-library"
import { config } from "../../../utils/main.js"
const COLORS = config.colors
const FONTS = config.fonts

const RenderedPost = (props) => {
  return (
    <ContentSection display="flex" flexFlow="column wrap">
      <a href="/blog">Back to posts</a>
      <h1>{props.title}</h1>
      <h3>{props.createdDate}</h3>
      <h2>{props.author}</h2>

      <Markdown>
        {props.body}
      </Markdown>
    </ContentSection>
  )
}

export const BlogPost = (props) => {
  console.log(`Fetching Post ${props.slug}`)
  const [state, setState] = useState({
    post: []
  })
  const getOptions = {
    method: "GET",
    headers: {"Content-Type": "application/json"}
  }
  useEffect(() => {
    fetch(`/blog/get-post/${props.slug}`, getOptions)
      .then(response => response.json())
      .then(data => setState({ post: data.data[0] }))
      .catch(error => console.log(error))
  }, [])

  return (
    <ContentSection display="flex" flexFlow="column wrap">
      <ContentSection
        aColor={COLORS.darkGray}
        aFontFamily={FONTS.headline}
        aFontSize="150%"
        aFontWeight="900"
        aHoverColor={COLORS.dodgerBlue}
        aMargin="auto"
        aTextTransform="uppercase"
        backgroundColor="white"
        borderRadius="4px"
        display="flex"
        flexFlow="row wrap"
        fontColor={COLORS.black}
        fontFamily={FONTS.content}
        h1Color={COLORS.yellow}
        h1FontFamily={FONTS.headline}
        h1FontSize="3rem"
        h1FontWeight="900"
        h1LetterSpacing=".3rem"
        h1LineHeight="125%"
        h1Margin="auto"
        h1Padding="1.5rem"
        h1TextTransform="uppercase"
        h2Color={COLORS.black}
        h2FontSize="2rem"
        h2FontWeight="bold"
        h2Margin="auto"
        h2Padding="1rem"
        margin="8rem auto 2rem auto"
        maxWidth="95vw"
        outline={`.2rem solid white`}
        padding="2rem"
        pFontSize="150%"
        pFontFamily={FONTS.content}
        pLineHeight="150%"
        pMargin="1rem auto"
        pMaxWidth="70rem"
        preBackground={COLORS.backgroundGray}
        preBorderRadius="1rem"
        preMargin=".5rem auto"
        preMaxWidth="75rem"
        preOverflow="scroll"
        prePadding="2rem"
        preWidth="100%"
      >
        {state.post ?
        <RenderedPost title={state.post.title} author={state.post.author} body={state.post.body} creationDate={state.post.creationDate} /> :
          <h1>Error Loading Blog Post</h1>
        }
      </ContentSection>
    </ContentSection>

  )
}
