import React from "react";
import { AdCardContainer, AdText } from "./style";

export default function AdvertCard({ adInfo }) {
  return (
    <AdCardContainer>
      <img src={adInfo.image} alt={adInfo.model} />
      <AdText>
        <div>
          <h2>Modèle :</h2>
          <p>{adInfo.model}</p>
        </div>
        <div>
          <h2>Année :</h2>
          <p>{adInfo.year}</p>
        </div>
        <div>
          <h2>Localisation :</h2>
          <p>{adInfo.location}</p>
        </div>
        <div>
          <h2>Prix :</h2>
          <p>{adInfo.price} €</p>
        </div>
        <h2>Déscription :</h2>
        <p>{adInfo.resume}</p>
      </AdText>
    </AdCardContainer>
  );
}
