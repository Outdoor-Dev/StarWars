import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const DropDown = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="ml-auto">
				{/* <Link to="/dropdown"> */}
				<div className="dropdown">
					<button
						className="btn btn-outline-light text-white dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favorites.map((favorite, index) => {
							return (
								<li key={index}>
									{favorite}{" "}
									<i
										className="ml-2 far fa-trash-alt"
										onClick={() => {
											actions.deleteFavorite(favorite);
										}}
									/>
								</li>
							);
						})}
						{/* <Link to="/">
							<button className="btn btn">Back home</button>
						</Link> */}
					</ul>
				</div>
				{/* </Link> */}
			</div>
		</>
	);
};
