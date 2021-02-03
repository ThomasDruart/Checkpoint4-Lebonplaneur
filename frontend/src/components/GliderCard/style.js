import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #e6e6e4;
  width: 25vw;
  border-radius: 0.2em;
  margin: 5vh 3vw;
  box-shadow: 1px 1px 2px 0px rgba(119, 119, 119, 0.75);
  font-family: "Bai Jamjuree", sans-serif;

  @media screen and (max-width: 768px) {
    width: 80vw;
  }

  img {
    width: 25vw;
    height: 25vh;
    object-fit: cover;
    border-radius: 0.2em 0.2em 0 0;

    @media screen and (max-width: 768px) {
      width: 80vw;
    }
  }
`;

export const TextZone = styled.div`
  padding: 1vh 1vw;

  h2 {
    font-size: 1.5em;
    text-align: center;
  }

  div {
    display: flex;
    justify-content: space-around;
    margin: 1vh 0;
  }

  button {
    display: block;
    margin: auto;
    padding: 0.5em;
    color: #f1eeea;
    border-radius: 0.2em;
    border: 0;
    background-color: #678bad;

    &:hover {
      cursor: pointer;
      box-shadow: 0 0.1em 0.1em 0 #777777;
      transition: transform 150ms;
      transform: scale(1.01);
    }
  }
`;
