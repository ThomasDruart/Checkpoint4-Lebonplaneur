import styled from "styled-components";

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
  }

  button {
    padding: 0.5em;
    border: 0;
    color: #f1eeea;
    border-radius: 0.2em;
    background-color: #4237c1;
    margin-bottom: 5vh;

    &:hover {
      cursor: pointer;
      box-shadow: 0 0.1em 0.1em 0 #777777;
      transition: transform 150ms;
      transform: scale(1.01);
    }
  }
`;

export const Infos = styled.div`
  border: solid 1px #4237c1;
  padding: 2vh 2vw;
  margin: 2vh 0;

  div {
    margin: 2vh 0;
  }
`;
