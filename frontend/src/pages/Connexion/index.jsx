import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { api, cookies } from "../../conf";
import { ConnexionContainer, Formulaire, NotClientButton } from "./style";

export default function Connexion() {
  const [displayForm, setDisplayForm] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  // REGISTER ----------------------------------------------
  const { register, handleSubmit } = useForm();

  const onSubmitRegister = (data) => {
    let url = "/auth/register";
    api.post(url, data).then((res) => {
      toast("Inscription validée");
      console.log(res.data); // token
    });
  };

  // LOGIN -------------------------------------------------
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmitLogin = (e) => {
    const { email, password } = form;
    let url = "/auth/login";
    let formData = { email, password };

    api
      .post(url, formData)
      .then(({ data }) => {
        const { token, user } = data;
        cookies.set("token", token);
        api.defaults.headers.authorization = "Bearer " + token;
        dispatch({ type: "LOGIN", user });
        toast(`Vous êtes connecté`);
        history.push("/private");
      })
      .catch((e) => {
        toast.error("Mauvaise combinaison email / mot de passe");
      });
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
            onChange={handleChange}
            required
          />
          <input
            name="password"
            onChange={handleChange}
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
