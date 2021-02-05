import React, { useState } from "react";
//import Axios from "axios";
import { useForm } from "react-hook-form";
import { ConnexionContainer, Formulaire, NotClientButton } from "./style";

export default function Connexion() {
  const [displayForm, setDisplayForm] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmitRegister = (data) => {
    console.log(data);
    // Axios.post("http://localhost:5050/auth/register", data).then(function () {
    //   alert("Inscription validée");
    // });
  };

  const onSubmitLogin = (data) => {
    console.log(data);
    // Axios.post("http://localhost:5050/login", data).then(function () {
    //   alert("Vous êtes maintenant connecté");
    // });
  };

  return (
    <ConnexionContainer>
      <div>
        <Formulaire onSubmit={handleSubmit(onSubmitLogin)}>
          <h2>Se connecter</h2>
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
        <Formulaire onSubmit={handleSubmit(onSubmitRegister)}>
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
