import styled from "styled-components";

export const HeaderContainer = styled.div`
  h1 {
    font-size: 3em;
    color: #4237c1;
    font-family: "Bai Jamjuree", sans-serif;
  }

  h2 {
    font-size: 1.3em;
    color: #4237c1;
    border: 2px solid #4237c1;
    border-radius: 0.2em;
    font-size: 1.2em;
    padding: 0.5em;
  }

  img {
    width: 100%;
  }

  input {
    border: 0;
    outline: 0;
    border-bottom: 2px solid #4237c1;
    padding: 0.4em;
    border-radius: 0.2em;
  }

  i {
    color: #4237c1;
    font-size: 1.2em;
  }
`;

export const SMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 12vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 30vh;
  }

  button {
  font-size: 1.2em;
  padding: 0.5em;
  border: 0;
  color:  #f1eeea;
  border-radius: 0.2em;
  background-color: #4237c1;

  &:hover {
  cursor: pointer;
  box-shadow: 0 0.1em 0.1em 0 #777777;
  transition: transform 150ms;
  transform: scale(1.01);
  }
`;
