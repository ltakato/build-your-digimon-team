import React, {createContext, useState} from "react";

export const TeamContext = createContext({});

export function TeamContextProvider(props) {
  const [team, setTeam] = useState([]);

  function addDigimon(digimon) {
    setTeam(prevTeam => [...prevTeam, digimon]);
  }

  function removeDigimon(digimon) {
    setTeam(prevTeam => prevTeam.filter(member => member.name !== digimon.name));
  }

  return (
    <TeamContext.Provider value={{ team, addDigimon, removeDigimon }}>
      {props.children}
    </TeamContext.Provider>
  )
}