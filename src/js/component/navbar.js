import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light  ">
			<div className="icons  ">
				<i className="fab fa-facebook fa-lg ml-2" />
				<i className="fab fa-instagram fa-lg ml-2" />
				<i className="fab fa-twitter fa-lg ml-2" />
				<i className="fab fa-youtube fa-lg ml-2" />
			</div>
			<Link to="/">
				<span className="navbar-brand text-white mb-0 h1">
					StaR
					<br />
					Wars
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
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
							<li>
								<a className="dropdown-item" href="#">
									Action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Another action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</li>
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
