import React from "react";
import "./logo.css";

function Logo() {
	return (
		<div className='row'>
			<div className='col 12 center'>
				<img
					src='/rollcalllogosquare-min.png'
					alt='Roll Call logo'
					id='squarelogo'
				/>
			</div>
		</div>
	);
}

export default Logo;
