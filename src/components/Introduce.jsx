import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { AiFillGithub, AiOutlineMail } from "react-icons/ai"
import { BiSolidMoon } from "react-icons/bi"
import styled from "styled-components"
import { StHeading, StRoundingBox, StText } from "../styles/common/commonStyles"

const Introduce = () => {
  const [isClicked, setIsClicked] = React.useState(true)
  return (
    <StIntroduceWrapper $isClicked={isClicked}>
      <StIconWrapper>
        <div onClick={() => setIsClicked(prev => !prev)}>
          <StaticImage src="../images/avatar.png" alt="프로필 이미지" />
        </div>
        <BiSolidMoon />
      </StIconWrapper>

      <StIntroduceContent $isClicked={isClicked}>
        <StIntroduceHeader>
          <StText opacity={true}>저에 대해 소개합니다.</StText>
          <div>
            <StHeading>이 진호</StHeading>
            <a href="https://github.com/dygmm4288">
              <AiFillGithub />
              <span>https://githubm.com/dygmm4288</span>
            </a>
            <a href="https://naver.com">
              <AiOutlineMail />
              <span>dlwlsghgk124@naver.com</span>
            </a>
          </div>
        </StIntroduceHeader>
        <StIntroduceMain>
          <StText>
            안녕하세요. 저는 생각하는 개발자가 되고 싶은 사람입니다.
          </StText>
          <StText>
            <strong>
              더 나은 개발 방식, 진행한 프로젝트 회고, 개발 과정 등 제가 생각한
              과정들을 작성할 예정입니다.
            </strong>
          </StText>
          <StText>
            블로그를 읽는 모든 분들에게 많은 도움이 됐으면 좋겠습니다.
          </StText>
        </StIntroduceMain>
        <StIntroduceFooter>
          <StText bold>
            HTML/CSS, JavaScript, TypeScript, React, Redux, NodeJS, Gatsby,
            Python, Functional Programming, GraphQL, React Query, Zustand,
            Recoil, Express JS, Koa
          </StText>
        </StIntroduceFooter>
      </StIntroduceContent>
    </StIntroduceWrapper>
  )
}

export default Introduce
const ifClicked = (a, b) => props => props.$isClicked ? a : b

const StIntroduceWrapper = styled(StRoundingBox)`
  position: relative;
  width: ${ifClicked("100%", "10rem")};
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  transition: all 0.5s ease-in;
`
const StIconWrapper = styled.div`
  position: absolute;
  img,
  > svg {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    cursor: pointer;
  }
  svg:hover {
    color: var(--accentColor);
  }
  top: 1rem;
  left: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 0;
  transition: all 0.5s ease-in;
`
const StIntroduceHeader = styled.div`
  position: relative;
  z-index: 1;
  margin: 0rem 5rem;
  div {
    display: flex;
    margin-top: 1rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    a {
      width: 1.5rem;
      height: 1.5rem;
    }
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
    svg:hover {
      color: var(--accentColor);
    }
  }
  span {
    position: absolute;
    left: -100vw;
  }
`
const StIntroduceMain = styled.div``
const StIntroduceFooter = styled.div``

const StIntroduceContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 1rem;
  width: ${ifClicked("100%", "0%")};
  height: ${ifClicked("13rem", "0rem")};
  max-height: 13rem;
  overflow: hidden;
  /* text-wrap: ${ifClicked("wrap", "nowrap")}; */
  text-wrap: nowrap;

  color: ${ifClicked("var(--textColor)", "transparent")};
  opacity: ${ifClicked("1", "0")};

  transition: all 0.5s ease-in;
  p:last-child {
    text-wrap: wrap;
  }
`
