import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CharacterCard = props => {
	return (
		<>
			<div className="charactercard background-card text-white ml-5 mb-5 " style={{ width: "19rem" }}>
				<img
					src="https://static.wikia.nocookie.net/worldsgreatestheroes/images/9/91/Obi-Wan_Headshot.jpg/revision/latest/scale-to-width-down/427?cb=20140512143941"
					className="card-img-top"
					style={{ width: 305, height: 400 }}
					alt="..."
				/>
				<div className="card-body ">
					<h5 className="card-title ">{props.character.name}</h5>
					<p className="card-text">
						Height:
						{props.character.height}
					</p>
					<p className="card-text">
						Eye Color:
						{props.character.eye_color}
					</p>
					<p className="card-text">
						Hair Color:
						{props.character.hair_color}
					</p>

					<Link to={"/characterdetails/" + props.character.id} className="btn btn-outline-light text-white">
						Learn More
					</Link>
					<i className="far fa-heart heart fa-lg " />
				</div>
			</div>
		</>
	);
};

CharacterCard.propTypes = {
	character: PropTypes.object
};
