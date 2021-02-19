import styled from "styled-components";

export const AdCardContainer = styled.div`
  background-color: #f8fbfe;
  width: 80vw;
  border-radius: 0.2em;
  margin: 5vh 3vw;
  box-shadow: 1px 1px 2px 0px rgba(119, 119, 119, 0.75);
  font-family: "Bai Jamjuree", sans-serif;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  img {
    width: 25vw;
    height: 20vh;
    object-fit: cover;
    border-radius: 0.2em 0.2em 0 0;

    @media screen and (max-width: 1024px) {
      width: 80vw;
      height: 30vh;
    }
  }

  h2 {
    font-weight: bold;
  }
`;

export const AdText = styled.div`
  padding: 1vh 1vw;

  div {
    display: flex;
    margin: 1vh 0;
  }
`;
