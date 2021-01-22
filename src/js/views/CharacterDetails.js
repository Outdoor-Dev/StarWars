import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";
// import { useParams } from "react-router-dom";

export const CharacterDetails = () => {
	const { store } = useContext(Context);
	// store is global state (value) - like context in useState
	// const { theid } = useParams();
	return (
		<>
			<div className="singlecharacter-body text-white">
				<img
					className="background-image"
					src="https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
				/>

				<div className="main-info ">
					<img
						className="gif"
						src="https://i.pinimg.com/originals/a0/90/cc/a090cc71d7d9ef95b22b18b9acc281f0.gif"
						style={{ width: 600, height: 400 }}
					/>
					<h1 className=" detail-title d-flex justify-content-center text-white">{store.details.name}</h1>
					<p className="text mt-4">
						Star Wars is, in short, a single, unified, vast, familiar, astonishingly well-executed story
						that emerged from the mind of one filmmaker. It is now worth billions of dollars, drives entire
						industries and subindustries, and has become a seemingly permanent facet of global culture. It’s
						profoundly silly, yet also strangely profound—a grand, nostalgic romance full of wisdom and love
						that three generations equate inextricably with childhood, adventure, and the definition of good
						and evil. The story, in broad strokes, is this: Two noble knights from an order called the Jedi
						discover a boy destined to be a powerful wielder of the mystical energy that connects the
						universe, called the Force. One of them dies protecting him from the Jedi’s evil counterparts,
						the Sith, but the other—Obi-Wan Kenobi (along with his master, a wise gnome named Yoda)—tries to
						train the boy, Anakin Skywalker, to fight on the side of good.
					</p>
				</div>
				<div className="characterdetails d-flex justify-content-center">
					<div className="row">
						<div className="col-md-2 pt-4">
							<h5>Name</h5>
							<p>{store.details.name}</p>
						</div>
						<div className="col-md-2 pt-4 pr-5">
							<h5>Birthdate</h5>
							<p> {store.details.birth_year}</p>
						</div>
						<div className="col-md-2 pl-5 pt-4 pr-5">
							<h5>Gender</h5>
							<p> {store.details.gender}</p>
						</div>
						<div className="col-md-2 pl-5 pt-4 pr-5">
							<h5>Height</h5>
							<p> {store.details.height}</p>
						</div>
						<div className="col-md-2 pl-5 pt-4 pr-5">
							<h5>Skin Color</h5>
							<p> {store.details.skin_color}</p>
						</div>
						<div className="col-md-2 pt-4 pl-5">
							<h5>Eye Color</h5>
							<p> {store.details.eye_color}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
