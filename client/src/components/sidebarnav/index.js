// import React from "react";
import React, { Component } from "react";

import M from "materialize-css/dist/js/materialize";
import "materialize-css/dist/css/materialize.min.css";
import Chat from "../../components/chat/chat";
import ClassList from "../../components/class/class";
import "./style.css";
import teachers from "../../teachers.json";




class SideNav extends Component {


	state = {
		teacherlist: [],
		currentuser: ""
	};

	
	componentDidMount = () => {

		let username = window.localStorage.getItem('username');
		this.setState({ currentuser: username});

		console.log('in sidenav index from local', username);
		console.log('in sidenav index from state', this.state.currentuser);
	}



	makeDropdown = () => {

		let listArr = [];

		for (var i = 0; i < teachers.length; i++) {
			var lastname = (teachers[i].caregiverfirstname + ' ' + teachers[i].caregiverlastname);
			listArr.push(lastname);
		}
		this.setState({ teacherlist: listArr });
	}


	render() {


		const items = this.state.teacherlist.map(teacher => {
			return <li key={teacher}><a> {teacher}</a></li>;
		});


		return (

			<>

				<div className='sideNavContainer'>
					<header className='nav transparent z-depth-0'>
						<div className='row'>
							<div className='col s6'>
								<ClassList teacherName={ this.state.currentuser } />
							</div>
						</div>

						<div className='col s12'>
							<a
								href='#'
								data-target='slide-out'
								className='waves-effect waves-light btn sidenav-trigger show-on-large transparent'>
								<i className='material-icons right'>send</i>Send Class
						</a>
						</div>
					</header>
					<ul id='slide-out' className='sidenav'>
						<li>
							<div className='user-view' id="chatheader">
								<p className='text-name'>{ this.state.currentuser }</p>
								{/* <a href='#name'>
									<p className='text-name'>First Name Last Name</p>
								</a>
								<a href='#email'>
									<p className='text-email'>email@email.com</p>
								</a> */}
							</div>
						</li>
						<ul className='collapsible'>
							<li>
								<div className='collapsible-header center'>

									<div className='dropdownHeader' id="dropdownheader" onClick={this.makeDropdown}>
										<p>
											Teachers <i className='material-icons right'>arrow_downward</i>
										</p>
									</div>
								</div>

								<ul>{items}</ul>

							</li>
						</ul>
						<div className='chatContainer' id='chatwindow'>
							<div className='col s12'>
								<Chat />
							</div>
						</div>
					</ul>
				</div >
			</>
		);
	}

}


export default SideNav;
