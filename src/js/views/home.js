import React, { useState, useEffect, useContext } from "react";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<video
				className="background-video"
				src="https://v.ftcdn.net/00/19/76/37/700_F_19763726_Wm4aPjRoZ81J7dZireLrkqSefBn0cW6y_ST.mp4"
				// src="https://v.ftcdn.net/03/99/58/47/700_F_399584730_LNmPejWjkdeZL8qlwgc7SdLX6H5860cH_ST.mp4"
				loop
				autoPlay
			/>
			<div className="container-fluid">
				{" "}
				<div className="characters  ">
					<h2 className="text-white ml-5 mb-3">Characters</h2>
					<div className="character-card d-flex align-content  flex-wrap ">
						{store.characters.map((value, index) => {
							console.log("index", index);
							return <CharacterCard key={index} character={value} index={index} />;
						})}
					</div>
				</div>
				<div className="planets">
					<h2 className="text-white ml-5 mb-3">Planets</h2>

					<div className="planets-card d-flex align-content-stretch flex-wrap">
						{store.planets.map((value, index) => {
							return <PlanetCard key={index} planet={value} index={index} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
};
