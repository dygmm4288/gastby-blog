import * as React from "react"
import { CiSearch } from "react-icons/ci"
import styled from "styled-components"

const PostSearch = () => {
  return (
    <StPostSearchWrapper>
      <input type="text" />
      <CiSearch />
    </StPostSearchWrapper>
  )
}

const StPostSearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  align-items: center;
  padding: 0rem 1rem;
  input {
    flex: 1;
    outline: none;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 4px solid var(--accentColor);
    background-color: transparent;
    padding-bottom: 0.5rem;
    transition: all 0.2s ease;
    opacity: 0.5;
  }
  input:focus {
    opacity: 1;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`

export default PostSearch
