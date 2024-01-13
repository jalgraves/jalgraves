import React, { useState, useEffect } from "react"
// import ReactMarkdown from "react-markdown"
import { ContentSection } from "@jalgraves/react-components-library"
import { StyledBlogData } from "./styles.js"

import { config } from "../../../utils/main.js"
const COLORS = config.colors
const FONTS = config.fonts

const PostDataCard = (props) => {
  const tags = props.tags || ["other"]
  return (
    <StyledBlogData aria-labelledby="Blog post info and link" $backgroundColor="whitesmoke">
      <table>
        <tbody>
          <tr>
            <td className="postTitle">{props.title}</td>
          </tr>
          <tr>
            <td className="postCreationDate">{props.creationDate}</td>
          </tr>
          {props.tags &&
          <tr>
            <td className="postTags">{tags.join(", ")}</td>
          </tr>
          }
        </tbody>
      </table>
      <p>{props.summary}</p>
    </StyledBlogData>
  )
}

const BlogPostDataCards = (props) => {
  const posts = props.posts
  const postsList = []
  if (posts) {
    let cnt = 1
    for (const post of Object.values(posts)) {
      postsList.push(
        <a key={post["id"]} href={`blog/posts/${post["slug"]}`}>
          <PostDataCard
            author={post["author"]}
            body={post["body"]}
            creationDate={post["creation_date"]}
            summary={post["summary"]}
            tags={post["tags"]}
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
    <ContentSection
      display="flex"
      flexFlow="row wrap"
      maxWidth="95vw"
      width="100%"
      justifyContent="space-evenly"
    >
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
        backgroundColor="white"
        borderRadius="4px"
        outline={`.1rem solid ${COLORS.black}`}
        display="flex"
        flexFlow="column wrap"
        fontColor={COLORS.black}
        fontFamily={FONTS.content}
        h1Color={COLORS.yellow}
        h1FontFamily={FONTS.headline}
        h1FontSize="3rem"
        h1FontWeight="900"
        h1LetterSpacing=".3rem"
        h1LineHeight="125%"
        h1Margin="auto"
        h1Padding="1rem"
        h1TextTransform="uppercase"
        h2Color={COLORS.black}
        h2FontSize="1rem"
        h2FontWeight="900"
        h2Margin="auto"
        h2Padding="1rem"
        margin="8rem auto 2rem auto"
        maxWidth="95vw"
        padding="2rem"
      >
        <h1>Stuff that could be useful</h1><br />
        <h2>&#40;But probably not&#41;</h2>
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
