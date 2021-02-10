import React from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  MainContainer,
  FormBox,
  BackLink,
  TextInput,
  SubmitInput,
} from "./style";

export default function PostForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    Axios.post("http://localhost:5050/gliders", data).then(function () {
      toast("Annonce postée avec succès");
    });
  };

  return (
    <MainContainer>
      <h1>Déposez votre annonce</h1>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextInput
            ref={register}
            type="text"
            name="image"
            placeholder="Lien de la photo"
            required
          />
        </div>
        <div>
          <TextInput
            ref={register}
            type="text"
            name="model"
            placeholder="Modèle"
            required
          />
        </div>
        <div>
          <TextInput
            ref={register}
            type="text"
            name="year"
            placeholder="Année"
            required
          />
        </div>
        <div>
          <textarea
            ref={register}
            type="text"
            name="resume"
            placeholder="Déscription"
            required
          />
        </div>
        <div>
          <TextInput
            ref={register}
            type="text"
            name="price"
            placeholder="Prix (€)"
            required
          />
        </div>
        <div>
          <TextInput
            ref={register}
            type="text"
            name="location"
            placeholder="Localisation"
            required
          />
        </div>
        <div>
          <TextInput
            ref={register}
            type="text"
            name="users_id"
            placeholder="Vendeur"
            required
          />
        </div>
        <SubmitInput type="submit" value="Poster" />
      </FormBox>
      <BackLink to="/">Retour</BackLink>
    </MainContainer>
  );
}
