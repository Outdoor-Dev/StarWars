import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const PlanetCard = props => {
	return (
		<>
			<div className="planet-card background-card text-white ml-5 mb-5 " style={{ width: "19rem" }}>
				<img
					src="https://media.cntraveler.com/photos/5727696bb161ad8b31235293/16:9/w_2560%2Cc_limit/GettyImages-143687829-tunisia.jpg"
					className="card-img-top"
					alt="..."
					style={{ width: 305, height: 200 }}
				/>
				<div className="card-body">
					<h5 className="card-title">{props.planet.name}</h5>
					<p className="card-text" />
					<a href="#" className="btn btn-outline-light text-white">
						Learn More
					</a>
					<i className="far fa-heart heart fa-lg" />
				</div>
			</div>
		</>
	);
};

PlanetCard.propTypes = {
	planet: PropTypes.object
};
