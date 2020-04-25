import React from "react";
import Login from "../../components/login/login";
import Logo from "../../components/logo/logo";

function LoginPage() {
	return (
		<>
			<div className='row'>
				<div className='col s12'>
					<Logo />
					<div className='row'>
						<div className='col s12'>
							<Login />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default LoginPage;
