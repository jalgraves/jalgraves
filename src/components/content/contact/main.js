import React from "react"
import { ContentSection } from "@jalgraves/react-components-library"
import { ContentContainer } from "../main.js"
import { ContactMe } from "./contactForm.js"

export const ContactInfo = () => {
  return (
    <ContentSection display="flex" flexFlow="column wrap">
      <ContentContainer>
      <h1>Contact Jonny</h1>
      <ContactMe />

      </ContentContainer>
    </ContentSection>
  )
}
