import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function UserAdverts() {
  const [userAds, setUserAds] = useState([])

  useEffect(() => {
    Axios.get(`xxx`).then(
      (res) => {
        console.log(res.data);
        setUserAds(res.data);
      }
    );
  }, []);

  return (
  <div>
      <h1>Espace personnel - Mes annonces</h1>
      {userAds.map((ad) => {
          return <p>test</p>;
        })}
  </div>
  )
}

