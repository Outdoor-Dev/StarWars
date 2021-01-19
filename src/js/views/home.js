import React, { useState, useEffect } from "react";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import "../../styles/home.scss";

export const Home = () => {
	const [characters, setCharacters] = useState([{ name: "luke" }, { name: "darth vader" }]);
	const [planets, setPlanets] = useState([{ name: "Death Star" }, { name: "The Republic" }]);

	return (
		<div className="container-fluid">
			<div className="characters">
				<h1>Characters</h1>
				<div className="character-card d-flex">
					{characters.map((value, index) => {
						return <CharacterCard key={index} character={value} />;
					})}
				</div>
			</div>
			<div className="planets">
				<h1>Planets</h1>
				<div className="planets-card d-flex">
					{planets.map((value, index) => {
						return <PlanetCard key={index} planet={value} />;
					})}
				</div>
			</div>
		</div>
	);
};
