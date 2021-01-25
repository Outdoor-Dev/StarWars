import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CharacterDetails } from "../views/CharacterDetails";
import { Context } from "../store/appContext";

export const CharacterCard = ({ character, index }) => {
	const { actions } = useContext(Context);
	// actions accessing in flux, the functions that change global state (store) (like setStore from useState). useContext accesing the global state. Context is the initializes context
	const [heart, setHeart] = useState(false);

	return (
		<>
			<div className="charactercard background-card text-white ml-5 mb-5 " style={{ width: "19rem" }}>
				<img
					src="https://i.pinimg.com/originals/1a/bc/b5/1abcb54c7291437e92e659884e30a1f1.jpg"
					className="card-img-top"
					style={{ width: 305, height: 360 }}
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

					<Link
						to={"/characterdetails/" + index}
						className="btn btn-outline-light text-white"
						onClick={() => {
							actions.setDetails(character);
						}}>
						Learn More
					</Link>

					<i
						onClick={() => actions.addFavorite(props.character.name)}
						className="far fa-heart heart fa-lg "
						style={{
							fontWeight: heart ? "bold" : "",
							color: heart ? "rgb(185, 19, 19)" : "white"
						}}
						onClick={() => setHeart(!heart)}
					/>
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
