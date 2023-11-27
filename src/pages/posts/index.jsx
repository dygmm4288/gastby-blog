import * as React from "react"
import PostCategory from "../../components/PostCategory"
import PostList from "../../components/PostList"
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
]

const Posts = ({ location }) => {
  const [searchTerm, setSearchTerm] = React.useState("")
  const handleSearchChange = event => {
    setSearchTerm(event.target.value)
  }
  const queryString = new URLSearchParams(location.search)
  const category = queryString.get("category")

  const isIncludeSearchTerm = isInclude(searchTerm)

  let filteredData = data
  if (category) {
    filteredData = filteredData.filter(post => post.category === category)
  }

  filteredData = filteredData.filter(
    post =>
      isIncludeSearchTerm(post.title) ||
      isIncludeSearchTerm(post.description) ||
      isIncludeSearchTerm(post.category) ||
      isIncludeSearchTerm(post.tags.join(" "))
  )

  return (
    <Layout location={location}>
      <PostCategory data={data} selectedCategory={category} />
      <PostSearch
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />
      <PostList data={filteredData} />
    </Layout>
  )
}
export const Head = () => <Seo title={Posts} />
export default Posts

function isInclude(target) {
  return base => base.includes(target)
}
