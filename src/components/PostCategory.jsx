import * as React from "react"
import styled from "styled-components"
import mapObject from "../lib/mapObject"
import { StTextSpan } from "../styles/common/commonStyles"

const data = [
  {
    category: "React",
    createdAt: "23. 11. 18",
    title: "React18 새로운 Hook 알아보기",
    description:
      "React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보",
    tags: ["react", "til"],
    slug: "react-post",
  },
  {
    category: "Typescript",
    createdAt: "23. 11. 18",
    title: "TypeScript 새로운 키워드 using",
    description:
      '2023년 8월 22일 최종 릴리즈 예정인 타입스크립트 5.2 버전에서 새로운 키워드인 "using"이 추가될 예정입니다.using 은 최근 3단계에 ',
    tags: ["typescript", "til"],
    slug: "typescript-post",
  },
  {
    category: "React",
    createdAt: "23. 11. 18",
    title: "React18 새로운 Hook 알아보기",
    description:
      "React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보",
    tags: ["react", "til"],
    slug: "react-post",
  },
  {
    category: "Typescript",
    createdAt: "23. 11. 18",
    title: "TypeScript 새로운 키워드 using",
    description:
      '2023년 8월 22일 최종 릴리즈 예정인 타입스크립트 5.2 버전에서 새로운 키워드인 "using"이 추가될 예정입니다.using 은 최근 3단계에 ',
    tags: ["typescript", "til"],
    slug: "typescript-post",
  },
  {
    category: "React",
    createdAt: "23. 11. 18",
    title: "React18 새로운 Hook 알아보기",
    description:
      "React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보",
    tags: ["react", "til"],
    slug: "react-post",
  },
  {
    category: "Typescript",
    createdAt: "23. 11. 18",
    title: "TypeScript 새로운 키워드 using",
    description:
      '2023년 8월 22일 최종 릴리즈 예정인 타입스크립트 5.2 버전에서 새로운 키워드인 "using"이 추가될 예정입니다.using 은 최근 3단계에 ',
    tags: ["typescript", "til"],
    slug: "typescript-post",
  },
  { category: "Redux" },
  { category: "Gatsby" },
  { category: "Next.js" },
  { category: "Blog" },
  { category: "Life" },
  { category: "Studying" },
  { category: "Firebase" },
  { category: "AWS" },
  { category: "HTML/CSS" },
]

const PostsCategory = () => {
  return (
    <StCategoryWrapper>
      {mapObject(data.reduce(getCategory, {}), (count, category) => (
        <StCategoryItem>
          <StTextSpan>{`${category}(${count})`}</StTextSpan>
        </StCategoryItem>
      ))}
    </StCategoryWrapper>
  )
}
// ? 아마도 graphQL에서 데이터를 알아서 잘 줄 것 같음
// ? 따라서 그냥 목 데이터이기 때문에 넣지만 실제로 데이터를 가져올 때는
// ? graphQL을 사용하도록 해야겠다

function getCategory(categoryCounter, post) {
  categoryCounter[post.category] = (categoryCounter[post.category] || 0) + 1
  return categoryCounter
}

export default PostsCategory

const StCategoryWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem;
`
const StCategoryItem = styled.li`
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    display: inline-block;
    width: 0.25rem;
    height: 0.25rem;
    background-color: #120d02;
    border-radius: 50%;
    transform: translateY(-50%);
    margin-left: 0.5rem;
  }
  &:last-child::after {
    content: "";
    width: 0;
    height: 0;
  }

  &:hover * {
    color: var(--accentColor);
  }
`
