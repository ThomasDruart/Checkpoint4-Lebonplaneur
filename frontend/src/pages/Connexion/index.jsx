import React, { useState } from "react";
//import Axios from "axios";
import { useForm } from "react-hook-form";
import { ConnexionContainer, Formulaire, NotClientButton } from "./style";

export default function Connexion() {
  const [displayForm, setDisplayForm] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Axios.post("http://localhost:5050/gliders", data).then(function () {
    //   alert("Inscription validée");
    // });
  };

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
        <Formulaire onSubmit={handleSubmit(onSubmit)}>
          <h2>S'enregistrer</h2>
          <input
            name="name"
            placeholder="Nom"
            type="name"
            ref={register}
            required
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            ref={register}
            required
          />
          <input
            name="password"
            ref={register}
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
