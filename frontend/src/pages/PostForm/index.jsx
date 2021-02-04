import React from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { BackLink } from "./style";

export default function PostForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    Axios.post("http://localhost:5050/gliders", data).then(function () {
      alert("Annonce postée avec succès");
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label form="image">Lien de la photo</label>
          <input ref={register} type="text" name="image" required />
        </div>
        <div>
          <label form="model">Modèle</label>
          <input ref={register} type="text" name="model" required />
        </div>
        <div>
          <label form="year">Année</label>
          <input ref={register} type="text" name="year" required />
        </div>
        <div>
          <label form="resume">Description</label>
          <textarea ref={register} type="text" name="resume" required />
        </div>
        <div>
          <label form="price">Prix</label>
          <input ref={register} type="text" name="price" required />
        </div>
        <div>
          <label form="location">Localisation</label>
          <input ref={register} type="text" name="location" required />
        </div>
        <div>
          <label form="users_id">users_id</label>
          <input ref={register} type="text" name="users_id" />
        </div>
        <div>
          <input type="submit" value="Poster" />
        </div>
      </form>
      <BackLink to="/">Retour</BackLink>
    </div>
  );
}
