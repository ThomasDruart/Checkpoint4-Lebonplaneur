import React from "react";
import { HeaderContainer, SMenu, LogoLink, PostLink, LoginLink } from "./style";
import glider from "../../images/glider.jpg";

export default function Header() {
  return (
    <HeaderContainer>
      <SMenu>
        <LogoLink to="/">Lebonplaneur</LogoLink>
        <PostLink to="/post">Déposer une annonce</PostLink>
        <div>
          <input name="recherche" type="text" placeholder="Rechercher" />
          <i className="fas fa-search"></i>
        </div>
        <LoginLink to="/connexion">Se connecter</LoginLink>
      </SMenu>
      <img src={glider} alt="planeur" />
    </HeaderContainer>
  );
}
