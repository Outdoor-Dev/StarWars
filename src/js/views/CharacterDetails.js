import React, { useState, useEffect } from "react";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import "../../styles/home.scss";
import { useParams } from "react-router-dom";

export const CharacterDetails = () => {
	const { theid } = useParams();
	return (
		<>
			<h1> hi this is My Param {theid} </h1>
		</>
	);
};
