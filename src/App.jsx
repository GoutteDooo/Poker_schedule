import React from "react";
import "./styles/main.scss";
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
    </>
  );
}

export default App;
