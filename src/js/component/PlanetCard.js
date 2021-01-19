import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const PlanetCard = props => {
	return (
		<>
			<div className="planet-card text-white ml-5" style={{ width: "18rem" }}>
				<img src={props.planet.image} className="card-img-top" alt="..." style={{ width: 300, height: 200 }} />
				<div className="card-body">
					<h5 className="card-title">{props.planet.name}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</>
	);
};

PlanetCard.propTypes = {
	planet: PropTypes.object
};
