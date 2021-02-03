import styled from "styled-components";

export const HeaderContainer = styled.div`
  h1 {
    font-size: 3em;
    color: #4237c1;
  }

  h2 {
    font-size: 1.3em;
    color: #4237c1;
  }

  img {
    width: 100%;
  }
`;

export const SMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 10vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 30vh;
  }
`;
