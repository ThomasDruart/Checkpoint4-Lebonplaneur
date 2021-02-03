import React, { useState, useEffect } from "react";
import Axios from "axios";
import GliderCard from "../../components/GliderCard";
import { GlidersContainer, Cards } from "./style";

export default function GlidersList() {
  const [glidersInfo, setGlidersInfo] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:5050/gliders`).then((res) => {
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
