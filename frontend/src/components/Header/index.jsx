import React from "react";
import { HeaderContainer, SMenu } from "./style";
import glider from "../../images/glider.jpg";

export default function Header() {
  return (
    <HeaderContainer>
      <SMenu>
        <h1>Lebonplaneur</h1>
        <button>Déposer une annonce</button>
        <div>
          <input name="recherche" type="text" placeholder="Rechercher" />
          <button>&#128269;</button>
        </div>
        <h2>Se connecter</h2>
      </SMenu>
      <img src={glider} alt="planeur" />
    </HeaderContainer>
  );
}
