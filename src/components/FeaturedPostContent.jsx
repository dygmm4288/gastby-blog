import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import styled from "styled-components"
import {
  StFlexRowSpaceBetween,
  StHeading,
  StText,
} from "../styles/common/commonStyles"

const FeaturedPostContent = ({
  category,
  createdAt,
  title,
  description,
  tags,
}) => {
  return (
    <StFeaturedPostContent>
      <StaticImage src="../images/study.png" />
      <StHeader>
        <StText>{category}</StText>
        <StText>{createdAt}</StText>
      </StHeader>
      <StHeading>{title}</StHeading>
      <StDescription>{description}</StDescription>
      <StTagsWrapper>
        {tags.map(tag => (
          <StTag>{tag}</StTag>
        ))}
      </StTagsWrapper>
    </StFeaturedPostContent>
  )
}

const StFeaturedPostContent = styled.li`
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: var(--backgroundColor2);
    border-radius: 0.5rem;
    overflow: hidden;
  }
`

const StHeader = styled(StFlexRowSpaceBetween)`
  p:first-child {
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.85rem;
    letter-spacing: 0.005rem;
    color: var(--primaryColor);
  }
  p:last-child {
    line-height: 1.4875rem;
    letter-spacing: 0.0004rem;
  }
`
const StDescription = styled(StText)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
const StTagsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`
const StTag = styled.span`
  padding: 0.5rem 1rem;
  background-color: var(--backgroundColor1);
  border-radius: 1rem;
  &:hover {
    background-color: var(--secondaryColor);
  }
`

export default FeaturedPostContent
