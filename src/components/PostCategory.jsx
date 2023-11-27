import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import mapObject from "../lib/mapObject"
import { StTextSpan } from "../styles/common/commonStyles"

const PostsCategory = ({ data, selectedCategory }) => {
  return (
    <StCategoryWrapper>
      {mapObject(data.reduce(getCategory, {}), (count, category) => (
        <StCategoryItem $selectedCategory={selectedCategory === category}>
          <Link
            to={
              selectedCategory !== category
                ? `/posts/?category=${category}`
                : "/posts"
            }
          >
            <StTextSpan>{`${category}(${count})`}</StTextSpan>
          </Link>
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

  * {
    color: ${props => (props.$selectedCategory ? "var(--accentColor)" : "")};
  }

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
