import React, {useEffect, useState} from "react";

import {digimonsRepository} from "../repositories/digimonsRepository";
import {Card} from "./Card";
import {Image} from "./Image";

export default function DigimonsList() {
  const [error, setError] = useState(false);
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    digimonsRepository().getAll()
      .then(digimons => setDigimons(digimons))
      .catch(() => setError(true))
  })

  if (error) return <p>Falha ao carregar digimons</p>;

  return (
    digimons.map(({ name, img }) => (
      <Card key={name}>
        <Image src={img} alt={`image for ${name}`} />
        <p>{name}</p>
      </Card>
    ))
  );
}