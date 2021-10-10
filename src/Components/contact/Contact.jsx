import React, { useRef , useState, useContext } from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";
const Contact = () => {
	const formRef = useRef();
	const [done, setDone] = useState(false)
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	
	function handleSubmit(e) {
		e.preventDefault()

		emailjs.sendForm('service_1g1rcoc', 'template_3o66flf', formRef.current, 'user_fxSX0Mis98LMOIjYHz7dS')
			.then((result) => {
				console.log(result.text)
				setDone(true);
			}, (error) => {
				console.log(error.text)
			})
	}
	return (
		<div className="c">
			<div className="c-bg"></div>
				<div className="c-wrapper">
					<div className="c-left">
						<h1 className="c-title">Let's Discuss Your Project</h1>
						<div className="c-info">
							<div className="c-info-item">
								<img src={Phone} alt="" className="c-icon" />
								+1 234 567 89
							</div>
							<div className="c-info-item">
								<img src={Email} alt="" className="c-icon" />
								contact@PMV.dev
							</div>
							<div className="c-info-item">
								<img src={Address} alt="" className="c-icon" />
								245 Kinh Duong Vuong, Binh Tan, TP.HCM, VietNam
							</div>
						</div>
					</div>
					<div className="c-right">
						<p className="c-desc">
							<b>What’s your story?</b>  Get in touch. Always available for
							freelancing if the right project comes along. Me.
						</p>
						<form ref={formRef} onclick={handleSubmit}>
							<input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
							<input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
							<input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
							<textarea style={{backgroundColor: darkMode && "#333"}} rows="2" placeholder="Message" name="message" />
							<button>Submit</button>
							{done && "Thank you..."}
						</form>
					</div>
			</div>		
		</div>
	)
}

export default Contact
