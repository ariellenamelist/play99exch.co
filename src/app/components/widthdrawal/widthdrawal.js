
'use client'
import Image from "next/image";
import mystyle from "././widthdrawal.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Widthdrawal() {
    return (
        <>
			<div className={mystyle.login}> 
			<div className={mystyle.wrapper}>
				<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
					<div className={mystyle.loginInner1}>
						<div className={`${mystyle["featured-box-login"]} ${mystyle["featured-box-secundary"]} ${mystyle["default"]}`} >
						<div className={mystyle.logFld}>
							<div className="log-logo m-b-20 text-center">
							<img className={mystyle.logoLogin} src="images/logo.png" />
							</div>
							<p>
							{" "}
							2 Factor Authentication enabled.
							<br />
							Please enter withdrawal password to login securely.
							</p>
							<form className="form-horizontal" role="form" method="post">
							<div className="form-group m-b-20">
								<input
								placeholder=" Enter Withdraw Password"
								id="loginName"
								name="username"
								defaultValue=""
								className="form-control"
								type="text"
								/>
								<span id="username-error" className="error" />
							</div>
							<div className="form-group text-center">
								<button
								type="button"
								className={`${mystyle["btn-submit"]} ${mystyle["btn-login"]}`}
							
								>
								{" "}
								Secure Login
								
								</button>
							</div>
							</form>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
			</div>

        </>
    )
}