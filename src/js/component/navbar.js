import React from "react";
import { Link } from "react-router-dom";
import Star from "../../img/Star.png";
import { DropDown } from "../views/Dropdown.js";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light ">
			<div className="icons  ">
				<i className="fab fa-facebook fa-lg ml-2" />
				<i className="fab fa-instagram fa-lg ml-2" />
				<i className="fab fa-twitter fa-lg ml-2" />
				<i className="fab fa-youtube fa-lg ml-2" />
			</div>

			<Link to="/">
				<span className="navbar-brand   h1">
					<img className src={Star} style={{ width: 240, height: 160 }} />
				</span>
			</Link>
			<DropDown />
		</nav>
	);
};
