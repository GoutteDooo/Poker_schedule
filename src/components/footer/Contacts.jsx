import React from "react";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__deco"></div>
      <div className="contacts__container">
        <div className="contacts__adresse">
          <img src="/images/info.jpg" alt="" />
          <div className="contacts__adresse--texts">
            <p>Kortrijkstraat 250</p>
            <strong>8560 WEVELGEM</strong>
          </div>
        </div>
        <div className="contacts__net">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="130"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8" />
              <path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18" />
            </g>
          </svg>
          <span>www.pokerfrancebelgique.fr</span>
        </div>
      </div>
      <div className="contacts__deco"></div>
    </div>
  );
};

export default Contacts;
