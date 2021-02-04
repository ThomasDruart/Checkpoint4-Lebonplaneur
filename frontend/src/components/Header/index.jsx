import React from "react";
import { HeaderContainer, SMenu, PostLink } from "./style";
import glider from "../../images/glider.jpg";

export default function Header() {
  return (
    <HeaderContainer>
      <SMenu>
        <h1>Lebonplaneur</h1>
        <PostLink to="/post">Déposer une annonce</PostLink>
        <div>
          <input name="recherche" type="text" placeholder="Rechercher" />
          <i class="fas fa-search"></i>
        </div>
        <h2>Se connecter</h2>
      </SMenu>
      <img src={glider} alt="planeur" />
    </HeaderContainer>
  );
}
