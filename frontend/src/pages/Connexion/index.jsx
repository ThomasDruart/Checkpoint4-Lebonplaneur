import React, { useState } from "react";
import Axios from "axios";
import { ConnexionContainer, Formulaire, NotClientButton } from "./style";

export default function Connexion() {
  const [displayForm, setDisplayForm] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:5050/auth/login`, form)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newForm = { ...form };
    newForm[name] = value;
    setForm(newForm);
  };

  return (
    <ConnexionContainer>
      <div>
        <Formulaire>
          <h2>Se connecter</h2>
          <input
            name="email"
            placeholder="Email"
            type="email"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            placeholder="Mot de passe"
            type="password"
            minLength="8"
            onChange={handleChange}
            required
          />
          <button
            name="submit"
            type="submit"
            value="Connexion"
            onSubmit={handleSubmit}
          >
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
          <input
            name="name"
            placeholder="Nom"
            type="name"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            placeholder="Mot de passe"
            type="password"
            minLength="8"
            onChange={handleChange}
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
