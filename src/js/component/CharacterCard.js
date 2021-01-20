import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const CharacterCard = props => {
	return (
		<>
			<div className="charactercard text-white ml-5 " style={{ width: "18rem" }}>
				<img
					src="https://static.wikia.nocookie.net/worldsgreatestheroes/images/9/91/Obi-Wan_Headshot.jpg/revision/latest/scale-to-width-down/340?cb=20140512143941"
					className="card-img-top"
					style={{ width: 300, height: 400 }}
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

					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</>
	);
};

CharacterCard.propTypes = {
	character: PropTypes.object
};
