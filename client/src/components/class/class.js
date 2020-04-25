import React from "react";

import "./class.css";

function classList({ teacherName }) {
	return (
		<>
			<div className='col s12 '>
				<div className='card horizontal transparent z-depth-0'>
					<div className='card-stacked center'>
						<div className='card-content teachername'>
							<h1>{teacherName}</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default classList;
