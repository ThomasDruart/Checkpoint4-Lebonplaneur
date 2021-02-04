import React, { useState, useEffect } from "react";
import { ConnexionContainer, Formulaire, NotClientButton } from "./style";

export default function Connexion() {
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <ConnexionContainer>
      <div>
        <Formulaire>
          <h2>Se connecter</h2>
          <input
            name="emailaddress"
            placeholder="Email"
            className="email"
            type="email"
            required
          />
          <input
            name="password"
            placeholder="Mot de passe"
            type="password"
            minLength="8"
            required
          />
          <button name="submit" className="btn" type="submit" value="Connexion">
            Connexion
          </button>
        </Formulaire>
      </div>
      <NotClientButton>Pas encore client ?</NotClientButton>
    </ConnexionContainer>
  );
}
