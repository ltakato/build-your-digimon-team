import styled from "styled-components";

export const Card = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-width: 5px;
  border-style: solid;
  border-color: ${props => props.selected ? "green" : "transparent"};
  box-shadow: 0 1px 1px rgba(0,0,0,.2);
  cursor: pointer;
  opacity: 1;
  transition: opacity ease .4s;
  :hover {
    opacity: .4;
  }
`;
