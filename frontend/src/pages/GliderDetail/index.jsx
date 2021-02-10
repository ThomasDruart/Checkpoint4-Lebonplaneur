import React, { useState, useEffect } from "react";
import { api } from "../../conf";
import { GliderDetailContainer, Infos, LinkBack } from "./style";

export default function GliderDetail(props) {
  const [gliderData, setGliderData] = useState([]);

  useEffect(() => {
    api.get(`/gliders/${props.match.params.id}`).then(
      (res) => {
        console.log(res.data);
        setGliderData(res.data[0]);
      }
    );
  }, [props.match.params.id]);

  return (
    <GliderDetailContainer>
      <h1>Détail de l'annonce</h1>
      <img src={gliderData.image} alt={gliderData.model} />
      <Infos>
        <h2>Modèle : {gliderData.model}</h2>
        <div>
          <h3>Année de construction : {gliderData.year}</h3>
          <h3>Prix : {gliderData.price} €</h3>
        </div>
        <div>
          <h3>Déscription :</h3>
          <p>{gliderData.resume}</p>
        </div>
        <div>
          <p>Vendeur : {gliderData.name}</p>
          <p>Contact : {gliderData.email}</p>
        </div>
      </Infos>
      <LinkBack to="/">Retour</LinkBack>
    </GliderDetailContainer>
  );
}
