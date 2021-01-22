import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CharacterDetails } from "../views/CharacterDetails";
import { Context } from "../store/appContext";

export const PlanetCard = ({ planet, index }) => {
	const { actions } = useContext(Context);
	return (
		<>
			<div className="planet-card background-card text-white ml-5 mb-5 " style={{ width: "19rem" }}>
				<img
					src="https://media.cntraveler.com/photos/5727696bb161ad8b31235293/16:9/w_2560%2Cc_limit/GettyImages-143687829-tunisia.jpg"
					className="card-img-top"
					alt="..."
					style={{ width: 305, height: 200 }}
				/>

				<div className="card-body ">
					<h5 className="card-title ">{planet.name}</h5>
					<p className="card-text">
						Height:
						{planet.height}
					</p>
					<p className="card-text">
						Eye Color:
						{planet.eye_color}
					</p>
					<p className="card-text">
						Hair Color:
						{planet.hair_color}
					</p>
					<Link
						to={"/planetdetails/" + index}
						className="btn btn-outline-light text-white"
						onClick={() => {
							actions.setDetails(planet);
						}}>
						Learn More
					</Link>
					<i className="far fa-heart heart fa-lg" />
				</div>
			</div>
		</>
	);
};

PlanetCard.propTypes = {
	planet: PropTypes.object
};
PlanetCard.propTypes = {
	index: PropTypes.number
};
