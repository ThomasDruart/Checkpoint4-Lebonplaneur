import React, { useState, useEffect } from "react";
import Axios from "axios";

import { GlidersContainer } from "./style";

export default function GlidersList() {
  const [gliders, setGliders] = useState([]);

  useEffect(() => {}, []);

  return (
    <GlidersContainer>
      <h1>Planeurs à vendre</h1>
    </GlidersContainer>
  );
}
