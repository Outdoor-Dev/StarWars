import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const CharacterCard = props => {
	return (
		<>
			<div className="charactercard text-white ml-5 " style={{ width: "18rem" }}>
				<img src={props.character.image} className="card-img-top" alt="..." />
				<div className="card-body ">
					<h5 className="card-title ">{props.character.name}</h5>
					<p className="card-text" />
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
