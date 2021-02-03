import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CharacterDetails } from "../views/CharacterDetails";
import { Context } from "../store/appContext";

export const PlanetCard = ({ planet, index }) => {
	const { store, actions } = useContext(Context);
	const [heart, setHeart] = useState(false);

	useEffect(
		() => {
			var result = store.favorites.find((element, index) => {
				return element == planet.name;
			});

			setHeart(result);
		},

		[store.favorites]
	);

	const handleClick = () => {
		if (heart) {
			actions.deleteFavorite(planet.name);
		} else {
			actions.addFavorite(planet.name);
		}
		// setHeart(!heart);
	};

	const images = {
		Tatooine:
			"https://media.cntraveler.com/photos/5727696bb161ad8b31235293/16:9/w_2560%2Cc_limit/GettyImages-143687829-tunisia.jpg",
		Alderaan:
			"https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C780",
		"Yavin IV": "https://i.redd.it/ig9ectnjbgsz.jpg",
		Hoth:
			"https://static0.srcdn.com/wordpress/wp-content/uploads/2019/08/star-wars-empire-strikes-back-hoth-ion-canon-echo-base-Edited.jpg",
		Dagobah: "https://lumiere-a.akamaihd.net/v1/images/dagobah_1ab566e6.jpeg?region=38%2C0%2C598%2C299",
		Bespin:
			"https://i0.wp.com/thegamefanatics.com/wp-content/uploads/2016/06/star-wars-battlefront-bespin-dlc-update-needs-content-that-should-have-been-there-at-la-943519.jpg?fit=1936%2C1090&ssl=1",
		Endor: "https://miro.medium.com/max/2560/1*iqaur5uhY90F2rLPIv-lvQ.jpeg",
		Naboo:
			"https://media.contentapi.ea.com/content/dam/walrus/images/2018/11/mapvista-theed-grid.jpg.adapt.crop191x100.628p.jpg",
		Coruscant: "https://lumiere-a.akamaihd.net/v1/images/Coruscant_03db43b4.jpeg?region=0%2C96%2C1536%2C768",
		Kamino:
			"https://lumiere-a.akamaihd.net/v1/images/databank_kamino_01_169_f9027822.jpeg?region=0%2C49%2C1560%2C780"
	};
	return (
		<>
			<div className="planet-card background-card text-white ml-5 mb-5 " style={{ width: "19rem" }}>
				<img src={images[planet.name]} className="card-img-top" alt="..." style={{ width: 305, height: 360 }} />

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
