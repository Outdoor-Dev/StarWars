import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CharacterCard = ({ character, index }) => {
	console.log(index);
	return (
		<>
			<div className="charactercard background-card text-white ml-5 mb-5 " style={{ width: "19rem" }}>
				<img
					src="https://cdn.vox-cdn.com/thumbor/KnYjrcxAozD5Q8pmr3QAXsJCwag=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/6434955/obi-wan.0.jpg"
					className="card-img-top"
					style={{ width: 305, height: 400 }}
					alt="..."
				/>
				<div className="card-body ">
					<h5 className="card-title ">{character.name}</h5>
					<p className="card-text">
						Height:
						{character.height}
					</p>
					<p className="card-text">
						Eye Color:
						{character.eye_color}
					</p>
					<p className="card-text">
						Hair Color:
						{character.hair_color}
					</p>

					<Link to={"/characterdetails/" + index} className="btn btn-outline-light text-white">
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
CharacterCard.propTypes = {
	index: PropTypes.number
};
