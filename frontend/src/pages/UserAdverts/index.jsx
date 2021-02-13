import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { api } from "../../conf";
import { UserAdvertsContainer } from "./style";

export default function UserAdverts() {
  const [userAds, setUserAds] = useState([])
  const user = useSelector((state) => state.user)

  useEffect(() => {
    api.get(`/${user.id}/adverts`).then(
      (res) => {
        setUserAds(res.data);
      }
    );
  }, [user]);

  return (
  <UserAdvertsContainer>
      <h1>Espace personnel - Mes annonces</h1>
      {userAds.length === 0 ? <p>Vous n'avez pas d'annonce pour le moment</p> : userAds.map((ad) => {
          return <p>{ad.model}</p>;
        })}
  </UserAdvertsContainer>
  )
}
