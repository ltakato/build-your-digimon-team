import React from "react";

import {Header} from "./layouts/Header";
import {Main} from "./layouts/Main";
import MainBackground from "./assets/main-background.png";

function App() {
  return (
    <div className="App">
      <Header>
        <span>Build your <b>Digimon Team</b></span>
      </Header>
      <Main backgroundImage={MainBackground}>

      </Main>
    </div>
  );
}

export default App;
