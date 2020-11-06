import React from "react";

import {Header} from "./layouts/Header";
import {Main} from "./layouts/Main";
import MainBackground from "./assets/main-background.png";
import {Container} from "./components/Container";
import DigimonsList from "./components/DigimonsList";
import {TeamContext, TeamContextProvider} from "./contexts/TeamContext";
import {TeamCounter} from "./components/TeamCounter";

function App() {
  return (
    <TeamContextProvider>
      <div className="App">
        <TeamContext.Consumer>
          {({ team }) => (
            <Header>
              <span>Build your <b>Digimon Team</b></span>
              <TeamCounter>
                <span>Seu time ({team.length})</span>
              </TeamCounter>
            </Header>
          )}
        </TeamContext.Consumer>
        <Main backgroundImage={MainBackground}>
          <Container>
            <DigimonsList />
          </Container>
        </Main>
      </div>
    </TeamContextProvider>
  );
}

export default App;
