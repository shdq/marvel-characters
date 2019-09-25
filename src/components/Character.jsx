import React from "react";

import "./Character.css";

import Image from "./Image";

const Character = ({ urls, name, desc, image }) => {
  const detailsUrl = urls
    .filter(link => link.type === "detail")
    .map((link, i) => {
      return (
        <li className="character__urls-list-item" key={i}>
          <a
            className="link"
            href={link.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {name} on marvel.com
          </a>
        </li>
      );
    });
  return (
    <div className="character">
      <Image imageClass="character__image" src={image} alt={name} />
      <h2 className="character__name">{name}</h2>
      <p className="character__description">{desc}</p>
      <ul className="character__urls-list">{detailsUrl}</ul>
    </div>
  );
};

export default Character;
