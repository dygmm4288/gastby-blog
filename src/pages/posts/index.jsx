import * as React from "react"
import PostCategory from "../../components/PostCategory"
import PostSearch from "../../components/PostSearch"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
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

const Posts = ({ location }) => {
  return (
    <Layout location={location}>
      <PostCategory data={data}></PostCategory>
      <PostSearch />
    </Layout>
  )
}
export const Head = () => <Seo title={Posts} />
export default Posts
