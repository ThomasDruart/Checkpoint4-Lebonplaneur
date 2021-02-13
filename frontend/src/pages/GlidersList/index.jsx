import React, { useState, useEffect } from "react";
import { api } from "../../conf";
import GliderCard from "../../components/GliderCard";
import { GlidersContainer, Cards } from "./style";

export default function GlidersList() {
  const [glidersInfo, setGlidersInfo] = useState([]);

  useEffect(() => {
    api.get(`/gliders`).then((res) => {
      setGlidersInfo(res.data);
    });
  }, []);

  return (
    <GlidersContainer>
      <h1>Planeurs à vendre</h1>
      <Cards>
        {glidersInfo.map((glider, i) => {
          return <GliderCard gliderInfo={glider} key={i} />;
        })}
      </Cards>
    </GlidersContainer>
  );
}
