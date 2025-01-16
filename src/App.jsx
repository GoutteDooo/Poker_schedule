import React from "react";
import "./styless/main.scss";
import Background from "./components/Background";
import Entete from "./components/Entete";
import Logo from "./components/Logo";
import Days from "./components/Days";
import Tournaments from "./components/Tournaments";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <Background />
      <div className="affiche-semaine">
        <header>
          <Entete />
          <Logo />
        </header>
        <main>
          <Days />
          <Tournaments />
        </main>
        <footer>
          <Contacts />
        </footer>
      </div>
    </>
  );
}

export default App;
