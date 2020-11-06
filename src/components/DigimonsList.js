import React, {useContext, useEffect, useState} from "react";

import {digimonsRepository} from "../repositories/digimonsRepository";
import {Card} from "./Card";
import {Image} from "./Image";
import {TeamContext} from "../contexts/TeamContext";

export default function DigimonsList() {
  const [error, setError] = useState(false);
  const [digimons, setDigimons] = useState([]);
  const { team, addDigimon, removeDigimon } = useContext(TeamContext);

  useEffect(() => {
    digimonsRepository().getAll()
      .then(digimons => setDigimons(digimons))
      .catch(() => setError(true))
  })

  if (error) return <p>Falha ao carregar digimons</p>;

  return (
    digimons.map(digimon => {
      const { name, img } = digimon;
      const selected = team.find(member => member.name === name);

      return (
        <Card key={name} selected={selected} onClick={() => selected ? removeDigimon(digimon) : addDigimon(digimon)}>
          <Image src={img} alt={`image for ${name}`} />
          <p>{name}</p>
        </Card>
      )
    })
  );
}