import styled from "styled-components";

export const GlidersContainer = styled.div`
  margin: 5vh 0;

  h1 {
    font-size: 2.5em;
    color: #4237c1;
    text-align: center;
    font-family: "Bai Jamjuree", sans-serif;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
