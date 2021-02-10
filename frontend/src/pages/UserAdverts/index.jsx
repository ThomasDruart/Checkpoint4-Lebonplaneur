import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { api } from "../../conf";

export default function UserAdverts() {
  const [userAds, setUserAds] = useState([])
  const user = useSelector((state) => state.user)

  useEffect(() => {
    api.get(`/${user.id}/adverts`).then(
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
          return <p>annonce</p>;
        })}
  </div>
  )
}

