import React, { useState, useEffect } from "react"
// import ReactMarkdown from "react-markdown"
import { ContentSection } from "@jalgraves/react-components-library"
import { StyledBlogData } from "./styles.js"

import { config } from "../../../utils/main.js"
const COLORS = config.colors
const FONTS = config.fonts

const PostDataCard = (props) => {
  console.log(props)
  return (
    <StyledBlogData aria-labelledby="Blog post info and link" $backgroundColor="whitesmoke">
      <table>
        <tbody>
          <tr>
            <td className="postTitle">{props.title}</td>
          </tr>
          <tr>
          <td className="postAuthor">{props.author}</td>
          </tr>
        </tbody>
      </table>
      <p>{props.summary}</p>
    </StyledBlogData>
  )
}

const BlogPostDataCards = (props) => {
  const posts = props.posts
  console.log(posts)
  const postsList = []
  if (posts) {
    let cnt = 1
    for (const post of Object.values(posts)) {
      postsList.push(
        <a key={post["id"]} href={`blog/posts/${post["slug"]}`}>
          <PostDataCard
            author={post["author"]}
            body={post["body"]}
            summary={post["summary"]}
            title={post["title"]}
            isActive={post["is_active"]}
            slug={post["slug"]}
          />
        </a>
      )
      cnt++
    }
  }
  return (
    <ContentSection display="flex" flexFlow="row wrap">
      {postsList}
    </ContentSection>
  )
}


export const BlogPosts = () => {
  const [state, setState] = useState({
    posts: []
  })
  const getOptions = {
    method: "GET",
    headers: {"Content-Type": "application/json"}
  }
  useEffect(() => {
    fetch(`/blog/get-posts`, getOptions)
      .then(response => response.json())
      .then(data => setState({ posts: data.data }))
      .catch(error => console.log(error))
  }, [])

  return (
    <ContentSection display="flex" flexFlow="column wrap">
      <ContentSection
        articleFontSize="150%"
        articleFontWeight="bold"
        articleLineHeight="150%"
        articleMargin="auto"
        articleMaxWidth="85vw"
        articlePadding="1rem"
        backgroundColor="white"
        borderRadius="4px"
        display="flex"
        flexFlow="row wrap"
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
        {state.posts ?
        <BlogPostDataCards posts={state.posts} /> :
        <ContentSection display="flex" flexFlow="row wrap">
          <h1>Error Loading Menu</h1>
        </ContentSection>
      }
      </ContentSection>
    </ContentSection>

  )
}
