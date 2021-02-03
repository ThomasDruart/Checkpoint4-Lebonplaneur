import React from "react";
import { FooterContainer, MainDiv } from "./style";
import facebook from "../../images/fb.png";
import twitter from "../../images/twitter.png";

export default function Footer() {
  return (
    <FooterContainer>
      <MainDiv>
        <ul>
          <li>Qui sommes-nous</li>
          <li>Mentions légales</li>
          <li>Contactez-nous</li>
        </ul>
        <div>
          <h3>Suivez-nous</h3>
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
        </div>
      </MainDiv>
      <p>Copyright @2021, Crafted with love</p>
    </FooterContainer>
  );
}
