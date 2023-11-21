import * as React from "react"
import styled from "styled-components"
import { StHeading, StText } from "../styles/common/commonStyles"
import { StDescription, StHeader } from "./FeaturedPostContent"

export default function PostItem({ category, createdAt, title, description }) {
  return (
    <StPostItemWrapper>
      <StHeader>
        <StText>{category}</StText>
        <StText>{createdAt}</StText>
      </StHeader>
      <StHeading>{title}</StHeading>
      <StDescription>{description}</StDescription>
    </StPostItemWrapper>
  )
}

const StPostItemWrapper = styled.li`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  min-height: 10rem;
  max-height: 10rem;

  transition: padding 0.5s ease;
  cursor: pointer;
  &:hover {
    padding-left: 1rem;
  }
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 0;
    transition: all 0.5s ease;
    top: 10px;
    left: 0;
  }
  &:hover::before {
    content: "";
    background-color: var(--accentColor);
    bottom: 10px;
    width: 5px;
    border-radius: 1rem;
  }
`
