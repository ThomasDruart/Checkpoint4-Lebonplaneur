import React from "react";
import { CardContainer } from "./style";

export default function GliderCard({ gliderInfo }) {
  return (
    <CardContainer>
      <img src={gliderInfo.image} alt="planeur à vendre" />

      <h2>
        {gliderInfo.model} ({gliderInfo.year})
      </h2>
      <div>
        <h3>{gliderInfo.location}</h3>
        <h3>{gliderInfo.price} €</h3>
      </div>
      <button>More info</button>
    </CardContainer>
  );
}
