import React from "react"
import styled from "styled-components"

const Section = styled.section`
  margin: 3rem auto;
  max-width: 600px;
`

export default ({ children }) => (
  <Section className={`container`}>{children}</Section>
)