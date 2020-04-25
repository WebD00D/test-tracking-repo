import React from "react";
import "./navbar.css";

function Navbar() {
	return (
		<nav className='nav transparent z-depth-0'>
			<img
				src='/rollcalllogohorizontal-min.png'
				alt='Roll Call'
				className='navlogo'
			/>
		</nav>
	);
}

export default Navbar;
