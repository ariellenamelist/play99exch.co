
'use client'
import Image from "next/image";
import mystyle from "././login.module.css"


export default function Login() {
    return (
        <>

        <div className={`${mystyle["global-container"]} ${mystyle["login-container"]}`}> 
		<div className={mystyle.image}>
			
			<Image
									className="img-fluid"
									src="/images/logo.png"
									alt="Play99Exch"
									width={254}
									height={65}      
									/>
		</div>
		<div className={`${'card'} ${mystyle["login-form"]}`}>
		<div className={mystyle.cardBody}> 
			<h3 className={`${mystyle["card-title"]} ${"text-center"}`} >LOGIN <i className="fa fa-hand-point-down"></i></h3>
			<div className="card-text">
				<form className={mystyle.form}>
					<div className="form-group">
						<div className={`${mystyle["field-01"]}`}>
						<input type="text" className={mystyle.formcontrol} id="" placeholder="User Name"/>
						<span className={mystyle.faicon}><i className="fa fa-user"></i></span>
						</div>
					</div>
					<div className="form-group">
						<div className={`${mystyle["field-01"]}`}>
						<input type="password" className="form-control form-control-sm formcontrol" id="" placeholder="Password"/>
						<span className={mystyle.faicon}><i className="fa fa-key"></i></span>
						</div>
					</div>
					<button type="submit" className={mystyle.btnblock}>Login <i className="fa fa-sign-in-alt"></i></button>
					<button type="submit" className={mystyle.btnblock}>Login with Demo ID <i className="fa fa-sign-in-alt"></i></button>
					
					<div className="whatapp-opt">
					<div className="or"><span>OR</span></div>
					<h3>Get your ready-made ID from whatsapp</h3>
					<div className="icons-info">
						<div className="box">
							<img _ngcontent-ksd-c44="" src="images/diamond.png" className="icon"/> diamond upgrade
						</div>
						<div className="box">
							<img _ngcontent-ksd-c44="" src="images/call-supprot.png" className="icon"/> 1 to 1 customer support
						</div>
						<div className="box">
							<img _ngcontent-ksd-c44="" src="images/withdraw.png" className="icon"/> 24/7 instatnt withdrawal
						</div>
					</div>
					<button type="submit" className={mystyle.btnblock}><img src="images/whatsapp.png" className="icon"/> Whatapp Now</button>
					</div>
					
					<div className="sign-up text-center">
						This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply. 						
					</div>
					<p className="mt-1 align-center" style={{marginBottom: '0px', textAlign:'center'}}><a _ngcontent-gwq-c42="" className="mail-link" href="mailto:play99exchinfo@gmail.com">play99exchinfo@gmail.com</a></p>
					<div className="link-up social_connect">
						<img _ngcontent-ksd-c44="" src="images/hand.png" className="slide-right handicon"/>
						
						<a _ngcontent-ksd-c44="" target="_blank" href="https://instagram.com/gold365official"><svg _ngcontent-ksd-c44="" width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle _ngcontent-ksd-c44="" cx="24" cy="24" r="20" fill="#C13584"></circle><path _ngcontent-ksd-c44="" d="M24 14.1622C27.2041 14.1622 27.5837 14.1744 28.849 14.2321C30.019 14.2855 30.6544 14.481 31.0773 14.6453C31.6374 14.863 32.0371 15.123 32.457 15.5429C32.877 15.9629 33.137 16.3626 33.3547 16.9227C33.519 17.3456 33.7145 17.981 33.7679 19.1509C33.8256 20.4163 33.8378 20.7958 33.8378 23.9999C33.8378 27.2041 33.8256 27.5836 33.7679 28.849C33.7145 30.019 33.519 30.6543 33.3547 31.0772C33.137 31.6373 32.877 32.0371 32.4571 32.457C32.0371 32.8769 31.6374 33.1369 31.0773 33.3546C30.6544 33.519 30.019 33.7144 28.849 33.7678C27.5839 33.8255 27.2044 33.8378 24 33.8378C20.7956 33.8378 20.4162 33.8255 19.151 33.7678C17.981 33.7144 17.3456 33.519 16.9227 33.3546C16.3626 33.1369 15.9629 32.8769 15.543 32.457C15.1231 32.0371 14.863 31.6373 14.6453 31.0772C14.481 30.6543 14.2855 30.019 14.2321 28.849C14.1744 27.5836 14.1622 27.2041 14.1622 23.9999C14.1622 20.7958 14.1744 20.4163 14.2321 19.1509C14.2855 17.981 14.481 17.3456 14.6453 16.9227C14.863 16.3626 15.123 15.9629 15.543 15.543C15.9629 15.123 16.3626 14.863 16.9227 14.6453C17.3456 14.481 17.981 14.2855 19.151 14.2321C20.4163 14.1744 20.7959 14.1622 24 14.1622ZM24 12C20.741 12 20.3323 12.0138 19.0524 12.0722C17.7752 12.1305 16.9028 12.3333 16.1395 12.63C15.3504 12.9366 14.6812 13.3469 14.0141 14.0141C13.3469 14.6812 12.9366 15.3504 12.63 16.1395C12.3333 16.9028 12.1305 17.7751 12.0722 19.0524C12.0138 20.3323 12 20.741 12 23.9999C12 27.259 12.0138 27.6676 12.0722 28.9475C12.1305 30.2248 12.3333 31.0971 12.63 31.8604C12.9366 32.6495 13.3469 33.3187 14.0141 33.9859C14.6812 34.653 15.3504 35.0633 16.1395 35.3699C16.9028 35.6666 17.7752 35.8694 19.0524 35.9277C20.3323 35.9861 20.741 35.9999 24 35.9999C27.259 35.9999 27.6677 35.9861 28.9476 35.9277C30.2248 35.8694 31.0972 35.6666 31.8605 35.3699C32.6496 35.0633 33.3188 34.653 33.9859 33.9859C34.653 33.3187 35.0634 32.6495 35.37 31.8604C35.6667 31.0971 35.8695 30.2248 35.9278 28.9475C35.9862 27.6676 36 27.259 36 23.9999C36 20.741 35.9862 20.3323 35.9278 19.0524C35.8695 17.7751 35.6667 16.9028 35.37 16.1395C35.0634 15.3504 34.653 14.6812 33.9859 14.0141C33.3188 13.3469 32.6496 12.9366 31.8605 12.63C31.0972 12.3333 30.2248 12.1305 28.9476 12.0722C27.6677 12.0138 27.259 12 24 12Z" fill="white"></path><path _ngcontent-ksd-c44="" d="M24.0059 17.8433C20.6026 17.8433 17.8438 20.6021 17.8438 24.0054C17.8438 27.4087 20.6026 30.1675 24.0059 30.1675C27.4092 30.1675 30.1681 27.4087 30.1681 24.0054C30.1681 20.6021 27.4092 17.8433 24.0059 17.8433ZM24.0059 28.0054C21.7968 28.0054 20.0059 26.2145 20.0059 24.0054C20.0059 21.7963 21.7968 20.0054 24.0059 20.0054C26.2151 20.0054 28.0059 21.7963 28.0059 24.0054C28.0059 26.2145 26.2151 28.0054 24.0059 28.0054Z" fill="white"></path><path _ngcontent-ksd-c44="" d="M31.8507 17.5963C31.8507 18.3915 31.206 19.0363 30.4107 19.0363C29.6154 19.0363 28.9707 18.3915 28.9707 17.5963C28.9707 16.801 29.6154 16.1562 30.4107 16.1562C31.206 16.1562 31.8507 16.801 31.8507 17.5963Z" fill="white"></path></svg><span _ngcontent-ksd-c44="">Instagram</span></a>
						<a target="_blank" href="https://telegram.me/Gold365Tg"><svg _ngcontent-ksd-c44="" width="40px" height="40px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle _ngcontent-ksd-c44="" cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)"></circle><path _ngcontent-ksd-c44="" d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white"></path><defs _ngcontent-ksd-c44=""><linearGradient _ngcontent-ksd-c44="" id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse"><stop _ngcontent-ksd-c44="" stopColor="#37BBFE"></stop><stop _ngcontent-ksd-c44="" offset="1" stopColor="#007DBB"></stop></linearGradient></defs></svg><span _ngcontent-ksd-c44="">Telegram</span></a>
					</div>
				</form>
			</div>
		</div>
	</div>
	</div>
        </>
    )
}
