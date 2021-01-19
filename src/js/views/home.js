import React, { useState, useEffect } from "react";
import { characterCard } from "../component/Cards";
import "../../styles/home.scss";

export const Home = () => {
	const [characters, setCharacters] = useState([{ name: "luke" }, { name: "darth vader" }]);
	const [planets, setPlanets] = useState([{ name: "Death Star" }, { name: "The Republic" }]);

	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<div>
				{characters.map((value, index) => {
					return <Card key={index} character={value} />;
				})}
			</div>
		</div>
	);
};
