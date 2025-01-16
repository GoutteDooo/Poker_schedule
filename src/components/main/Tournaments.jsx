import React from "react";

const Tournaments = () => {
  return (
    <div className="tournaments">
      <div className="dayTournament">
        <div className="dayName">Lundi</div>
        <div className="dayTournament__container">
          <div className="tournament">
            <strong>18h00 - 21h30</strong> <span>Nine's 70K Prog KO</span>
            <div className="tournament__cost">50€</div>
          </div>
          <div className="tournament">
            <strong>21h30 - 23h30</strong>{" "}
            <span>Little Nine'S 35K Prog KO</span>
            <div className="tournament__cost">25€</div>
          </div>
        </div>
        <div className="tournament__card">
          <img src="/images/card-9.jpg" alt="card" className="card" />
        </div>
      </div>
      <div className="dayTournament">
        <div className="dayName">Mardi</div>
        <div className="dayTournament__container">
          <div className="tournament">
            <strong>18h00 - 21h30</strong> <span>Ten'S 50K demi-ante</span>
            <div className="tournament__cost">40€</div>
          </div>
          <div className="tournament">
            <strong>21h30 - 23h30</strong>{" "}
            <span>Little Ten'S 25K demi-ante</span>
            <div className="tournament__cost">20€</div>
          </div>
        </div>
        <div className="tournament__card">
          <img src="/images/card-10.jpg" alt="card" className="card" />
        </div>
      </div>
      <div className="dayTournament">
        <div className="dayName">Mercredi</div>
        <div className="dayTournament__container">
          <div className="tournament">
            <strong>18h00 - 21h30</strong> <span>Jack's 70K classic</span>
            <div className="tournament__cost">30€</div>
          </div>
          <div className="tournament">
            <strong>21h30 - 23h30</strong>{" "}
            <span>Little Jack'S 35K classic</span>
            <div className="tournament__cost">15€</div>
          </div>
        </div>
        <div className="tournament__card">
          <img src="/images/card-j.jpg" alt="card" className="card" />
        </div>
      </div>
      <div className="dayTournament">
        <div className="dayName">Jeudi</div>
        <div className="dayTournament__container">
          <div className="tournament">
            <strong>18h00 - 21h30</strong> <span>Queen'S 80K classic</span>
            <div className="tournament__cost">30€</div>
          </div>
          <div className="tournament">
            <strong>21h30 - 23h30</strong>{" "}
            <span>Little Queen'S 40K classic</span>
            <div className="tournament__cost">15€</div>
          </div>
        </div>
        <div className="tournament__card">
          <img src="/images/card-q.jpg" alt="card" className="card" />
        </div>
      </div>
      <div className="dayTournament">
        <div className="dayName">Vendredi</div>
        <div className="dayTournament__container">
          <div className="tournament">
            <strong>18h00 - 22h00</strong> <span>King's 250K</span>
            <div className="tournament__cost">40€</div>
          </div>
          <div className="tournament">
            <strong>22h00 - 00h00</strong> <span>Little King'S 250K</span>
            <div className="tournament__cost">20€</div>
          </div>
        </div>
        <div className="tournament__card">
          <img src="/images/card-k.jpg" alt="card" className="card" />
        </div>
      </div>
      <div className="dayTournament">
        <div className="dayName">Samedi</div>
        <div className="dayTournament__container">
          <div className="tournament">
            <strong>15h00 - 20h00</strong> <span>Ace'S Million</span>
            <div className="tournament__cost">50€</div>
          </div>
          <div className="tournament">
            <strong>20h00 - 00h00</strong> <span>Little Ace'S 500K</span>
            <div className="tournament__cost">25€</div>
          </div>
        </div>
        <div className="tournament__card" id="ace">
          <img
            src="/images/Ace_of_spades.svg.png"
            alt="card"
            className="card"
          />
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
