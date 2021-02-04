import styled from "styled-components";

export const ConnexionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 40vh;
  width: 100%;
  margin-top: 10vh;
`;

export const Formulaire = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 390px;
  height: 220px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 10px 10px rgba(0, 0, 5, 0.25);
  margin-bottom: 10vh;
  @media screen and (max-width: 768px) {
    width: 230px;
  }
  h2 {
    color: #4237c1;
    font-size: 1.4em;
    @media screen and (max-width: 768px) {
      font-size: 1.2em;
    }
  }
  input,
  button {
    width: 300px;
    height: 40px;
    border: none;
    border-radius: 3px;
    font-size: 1.2em;
    @media screen and (max-width: 768px) {
      width: 190px;
      font-size: 1.1em;
    }
  }
  input {
    color: #005542;
    padding-left: 8px;
  }
  button {
    width: 310px;
    height: 40px;
    background-color: #4237c1;
    color: #fff;
    margin-bottom: 15px;
    @media screen and (max-width: 768px) {
      width: 200px;
    }
    :hover {
      cursor: pointer;
      box-shadow: 0 0.1em 0.1em 0 #777777;
      transition: transform 150ms;
      transform: scale(1.01);
    }
  }
`;

export const NotClientButton = styled.button`
  width: 15vw;
  padding: 1vh 0;
  border: none;
  border-radius: 3px;
  font-size: 1.2em;
  color: #4237c1;
  background-color: white;
  border: 2px solid #4237c1;
  margin-bottom: 5vh;
  outline: none;
  @media screen and (max-width: 768px) {
    width: 45vw;
  }
  :hover {
    cursor: pointer;
    box-shadow: 0 0.1em 0.1em 0 #777777;
    transition: transform 150ms;
    transform: scale(1.01);
  }
`;
