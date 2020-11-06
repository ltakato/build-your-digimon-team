import styled from "styled-components";

export const Main = styled.main`
  height: 90vh;
  width: 100%;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  display: flex;
  justify-content: center;
`;