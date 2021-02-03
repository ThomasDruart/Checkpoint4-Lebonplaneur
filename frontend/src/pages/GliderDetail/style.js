import styled from "styled-components";
import { Link } from "react-router-dom";

export const GliderDetailContainer = styled.div`
  font-family: "Bai Jamjuree", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 2em;
    text-align: center;
    margin: 5vh 0;
  }

  h2 {
    font-weight: bold;
    font-size: 1.2em;
  }

  h3 {
    font-weight: bold;
  }

  img {
    width: 50vw;
    margin-bottom: 5vh;

    @media screen and (max-width: 768px) {
      width: 80vw;
    }
  }
`;

export const Infos = styled.div`
  border: solid 1px #4237c1;
  padding: 2vh 2vw;
  margin: 2vh 0;
  max-width: 60vw;

  div {
    margin: 2vh 0;
  }
`;

export const LinkBack = styled(Link)`
  text-decoration: none;
  text-align: center;
  margin: 0 7vw;
  padding: 0.5em;
  color: #f1eeea;
  border-radius: 0.2em;
  border: 0;
  background-color: #4237c1;
  margin-bottom: 5vh;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.1em 0.1em 0 #777777;
    transition: transform 150ms;
    transform: scale(1.01);
  }

  @media screen and (max-width: 768px) {
    margin: 0 25vw;
  }
`;
