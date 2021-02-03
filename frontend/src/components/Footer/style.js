import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #678bad;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f1eeea;
  padding: 5vh 0;

  p {
    font-size: 0.8em;
  }
`;

export const MainDiv = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 3vw;

  li {
    padding: 0.5vh 0;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  img {
    height: 3vh;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 2vh;
  }
`;
