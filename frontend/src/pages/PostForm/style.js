import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  font-family: "Bai Jamjuree", sans-serif;
  margin: 5vh 0;

  h1 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 5vh;
    color: #4237c1;
  }
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    padding: 2vh 2vw;
    margin: 0 25vw;
    background-color: #f4f7f8;
  }

  textarea {
    width: 40vw;
    background-color: #e8eeef;
    border: none;
    padding: 0.5em;
    height: 10vh;
    resize: none;
    @media screen and (max-width: 768px) {
      width: 80vw;
    }
  }
`;

export const TextInput = styled.input`
  border: none;
  background-color: #e8eeef;
  padding: 0.5em;
  width: 40vw;
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const SubmitInput = styled.input`
  width: 10vw;
  text-decoration: none;
  margin-bottom: 10vh;
  padding: 0.5em;
  border: 0;
  color: #4237c1;
  border-radius: 0.2em;
  background-color: white;
  border: 2px solid #4237c1;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.1em 0.1em 0 #777777;
    transition: transform 150ms;
    transform: scale(1.01);
  }
`;

export const BackLink = styled(Link)`
  margin-left: 70vw;
  text-decoration: none;
  padding: 0.5em;
  border: 0;
  color: #f1eeea;
  border-radius: 0.2em;
  background-color: #4237c1;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.1em 0.1em 0 #777777;
    transition: transform 150ms;
    transform: scale(1.01);
  }
`;
