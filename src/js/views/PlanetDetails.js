import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export const PlanetDetails = () => {
	const { store } = useContext(Context);
	// store is global state (value) - like context in useState
	// const { theid } = useParams();
	return (
		<>
			<div className="singlecharacter-body text-white">
				<img
					className="background-image"
					src="https://images.unsplash.com/photo-1504333638930-c8787321eee0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
				/>

				<div className="main-info ">
					<img
						className="gif"
						src="https://64.media.tumblr.com/27584e769d91183fb5a37a1f02946933/tumblr_nilmt3nkyp1rsrbdko4_r1_500.gifv"
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
			</div>
		</>
	);
};
