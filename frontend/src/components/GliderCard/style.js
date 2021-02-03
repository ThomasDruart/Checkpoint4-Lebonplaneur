import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #e6e6e4;
  width: 25vw;
  border-radius: 0.2em;
  /* display: flex;
  justify-content: center;
  flex-direction: column; */

  img {
    width: 25vw;
    border-radius: 0.2em 0.2em 0 0;
  }

  h2 {
    font-size: 1.5em;
  }

  div {
    display: flex;
    justify-content: space-around;
  }
`;
