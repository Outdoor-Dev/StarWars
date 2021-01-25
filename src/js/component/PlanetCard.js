import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CharacterDetails } from "../views/CharacterDetails";
import { Context } from "../store/appContext";

export const PlanetCard = ({ planet, index }) => {
	const { actions } = useContext(Context);
	const [heart, setHeart] = useState(false);
	const handleClick = () => {
		setHeart(!heart);
		actions.addFavorite(planet.name);
		console.log(planet.name);
	};
	return (
		<>
			<div className="planet-card background-card text-white ml-5 mb-5 " style={{ width: "19rem" }}>
				<img
					src="https://i0.wp.com/thegamefanatics.com/wp-content/uploads/2016/06/star-wars-battlefront-bespin-dlc-update-needs-content-that-should-have-been-there-at-la-943519.jpg?fit=1936%2C1090&ssl=1"
					className="card-img-top"
					alt="..."
					style={{ width: 305, height: 360 }}
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
					<i
						onClick={() => handleClick()}
						className="far fa-heart heart fa-lg "
						style={{
							fontWeight: heart ? "bold" : "",
							color: heart ? "rgb(185, 19, 19)" : "white"
						}}
					/>
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
