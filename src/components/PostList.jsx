import React from "react"
import styled from "styled-components"
import { StRoundingBox } from "../styles/common/commonStyles"
import PostItem from "./PostItem"

export default function PostList({ data }) {
  return (
    <StPostContainer as="ul">
      {data.map((props, i) => (
        <PostItem key={props.title + i} {...props} />
      ))}
    </StPostContainer>
  )
}

const StPostContainer = styled(StRoundingBox)`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  /* padding-bottom: 2rem; */
  gap: 2rem;
`
