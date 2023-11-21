import styled from "styled-components"

export const StText = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4875rem;
  letter-spacing: 0.004rem;
  opacity: ${props => (props.opacity ? 0.75 : 1)};
  font-weight: ${props => (props.bold ? "bold" : "normal")};

  strong {
    font-weight: 700;
  }
`
export const StTextSpan = styled.span`
  color: #120d02;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4875rem;
  letter-spacing: 0.004rem;
`
export const StHeading = styled.h2`
  opacity: 0.9;
  letter-spacing: 0.000375rem;
  line-height: 1.8rem;
  font-size: 1.5rem;
  font-weight: 700;
`

export const StRoundingBox = styled.div`
  border-radius: 1rem;
  background-color: var(--backgroundColor3);
  padding: 0.5rem 1rem;
`

export const StFlexRowSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`
