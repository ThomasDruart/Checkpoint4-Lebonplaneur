import React, { useState, useEffect } from "react";
import { ConnexionContainer, Formulaire, NotClientButton } from "./style";

export default function Connexion() {
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <ConnexionContainer>
      <div>
        <Formulaire>
          <h2>Se connecter</h2>
          <input name="email" placeholder="Email" type="email" required />
          <input
            name="password"
            placeholder="Mot de passe"
            type="password"
            minLength="8"
            required
          />
          <button name="submit" type="submit" value="Connexion">
            Connection
          </button>
        </Formulaire>
      </div>
      <NotClientButton
        onClick={() => {
          setDisplayForm(!displayForm);
        }}
      >
        {displayForm ? "Masquer" : "Pas encore client ?"}
      </NotClientButton>
      {displayForm ? (
        <Formulaire>
          <h2>S'enregistrer</h2>
          <input name="name" placeholder="Nom" type="name" required />
          <input name="email" placeholder="Email" type="email" required />
          <input
            name="password"
            placeholder="Mot de passe"
            type="password"
            minLength="8"
            required
          />
          <button name="submit" type="submit" value="Connexion">
            S'inscrire
          </button>
        </Formulaire>
      ) : null}
    </ConnexionContainer>
  );
}
