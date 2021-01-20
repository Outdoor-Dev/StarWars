import React, { useState, useEffect } from "react";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import "../../styles/home.scss";

export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	useEffect(() => {
		fetch("https://swapi.dev/api/people/")
			.then(function(response) {
				if (!response.ok) {
					throw Error("error");
				}

				return response.json();
			})
			.then(function(responseAsJson) {
				setCharacters(responseAsJson.results);
				console.log(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
		fetch("https://swapi.dev/api/planets/")
			.then(function(response) {
				if (!response.ok) {
					throw Error("error");
				}

				return response.json();
			})
			.then(function(responseAsJson) {
				setPlanets(responseAsJson.results);
				console.log(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	return (
		<>
			<video
				src="https://v.ftcdn.net/00/19/76/37/700_F_19763726_Wm4aPjRoZ81J7dZireLrkqSefBn0cW6y_ST.mp4"
				loop
				autoPlay
			/>
			<div className="container-fluid">
				{" "}
				<div className="characters ">
					<h1 className="text-white ml-5">Characters</h1>
					<div className="character-card d-flex align-content  flex-wrap ">
						{characters.map((value, index) => {
							return <CharacterCard key={index} character={value} />;
						})}
					</div>
				</div>
				<div className="planets">
					<h1 className="text-white ml-5">Planets</h1>

					<div className="planets-card d-flex align-content-stretch flex-wrap">
						{planets.map((value, index) => {
							return <PlanetCard key={index} planet={value} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
};
