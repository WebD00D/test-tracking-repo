import React from "react";
import "./studentprofile.css";

function StudentProfile(props) {
	return (
		<div className='content'>
			<ul className='studentInfo'>
				<li>
					<strong>Name:</strong> {props.lastname} {props.firstname}
				</li>
				<li>
					<strong>Current Caregiver:</strong> {props.caregiver}
				</li>
				<li>
					<span>Birthday:</span> {props.birthday}
				</li>
				<li>
					<span>Parent:</span> {props.parentfirstname} {props.parentlastname}
				</li>
				<li>
					<span>Parent Phone:</span> {props.parentphone}
				</li>
				<li>
					<strong>Care Notes:</strong> {props.carenotes}
				</li>
			</ul>
		</div>
	);
}

export default StudentProfile;
