import React from "react"
// import ReactMarkdown from "react-markdown"
import { BlogForm, ContentSection } from "@jalgraves/react-components-library"

import { config } from "../../../utils/main.js"
const COLORS = config.colors
const FONTS = config.fonts

export const CreateBlogPost = () => {
  return (
    <ContentSection display="flex" flexFlow="column wrap">
      <ContentSection
        articleFontSize="150%"
        articleFontWeight="bold"
        articleLineHeight="150%"
        articleMargin="auto"
        articleMaxWidth="85vw"
        articlePadding="1rem"
        backgroundColor="rgba(248, 248, 248, 0.5)"
        borderRadius="4px"
        display="flex"
        flexFlow="column wrap"
        fontColor={COLORS.black}
        fontFamily={FONTS.content}
        h1Color={COLORS.yellow}
        h1FontFamily={FONTS.title}
        h1FontSize="3rem"
        h1FontWeight="900"
        h1LetterSpacing=".3rem"
        h1LineHeight="125%"
        h1Margin="auto"
        h1Padding="1.5rem"
        h1TextShadow="rgb(0, 0, 0) 2px 2px 6px;"
        h2Color={COLORS.black}
        h2FontSize="2rem"
        h2FontWeight="bold"
        h2Margin="auto"
        h2Padding="1rem"
        margin="8rem auto 2rem auto"
        maxWidth="95vw"
        outline={`.2rem solid ${COLORS.yellow}`}
        padding="2rem"
      >
        <h1>New Post</h1>
        <BlogForm
          createPostReply="&#9733; Post Created!"
          display="flex"
          flexFlow="column wrap"
          fontFamily={FONTS.headers}
          buttonColor={COLORS.red}
          buttonFontColor={COLORS.white}
          buttonFontWeight="bold"
          buttonLetterSpacing=".3rem"
          labelFontWeight="bold"
          labelLetterSpacing=".3rem"
          pFontColor={COLORS.yellow}
          pFontFamily={FONTS.headers}
          pLetterSpacing=".2rem"
          pFontWeight="900"
          pTextTransform="uppercase"
          postPath="create-post"
          requiredFieldError="&#9757; This field is required"
          width="100%"
        />
      </ContentSection>
    </ContentSection>
  )
}
