import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import { StHeading, StRoundingBox } from "../styles/common/commonStyles"
import FeaturedPostContent from "./FeaturedPostContent"

const FeaturedPost = () => {
  const data = [
    {
      category: "React",
      createdAt: "23. 11. 18",
      title: "React18 새로운 Hook 알아보기",
      description:
        "React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보",
      tags: ["react", "til"],
    },
    {
      category: "Typescript",
      createdAt: "23. 11. 18",
      title: "TypeScript 새로운 키워드 using",
      description:
        '2023년 8월 22일 최종 릴리즈 예정인 타입스크립트 5.2 버전에서 새로운 키워드인 "using"이 추가될 예정입니다.using 은 최근 3단계에 ',
      tags: ["typescript", "til"],
    },
  ]

  return (
    <StFeaturedPostWrapper>
      <StFeaturedPostHeader>
        <StHeading>Featured Posts</StHeading>
        <Link to="/posts/">전체 포스트 보기</Link>
      </StFeaturedPostHeader>
      <StFeaturedPostContentWrapper>
        {data.map(props => (
          <FeaturedPostContent {...props} />
        ))}
      </StFeaturedPostContentWrapper>
    </StFeaturedPostWrapper>
  )
}

const StFeaturedPostWrapper = styled(StRoundingBox)`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`
const StFeaturedPostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem 0rem;

  h2 {
    color: var(--accentColor);
  }
  a:hover {
    color: var(--accentColor);
  }
`
const StFeaturedPostContentWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 1rem;
`

export default FeaturedPost
