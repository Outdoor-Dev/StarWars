import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const DropDown = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="ml-auto">
				<Link to="/dropdown">
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
							<li>Action</li>
							<li>Another action</li>
							<li>Something else here</li>
						</ul>
						<Link to="/">
							<button className="btn btn-primary">Back home</button>
						</Link>
					</div>
				</Link>
			</div>
		</>
	);
};
