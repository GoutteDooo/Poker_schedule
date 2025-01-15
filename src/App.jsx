import React from "react";
import "./styles/main.scss";
import Background from "./components/Background";
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
