/** @format */

import React, { useContext } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Messages from "../Components/Messages";
import TextArea from "../Components/TextArea";
import { ItineraryContext } from "../Contexts/ItineraryContext";

function Contact() {
	const {
		contactForm,
		contactNames,
		contactEmail,
		contactSubject,
		contactMessage,
		SendMessage,
	} = useContext(ItineraryContext);

	return (
		<div className="mx-5">
			<h3 className="font-bold text-center text-lg mb-1 ">Contact Us</h3>
			<p className="font-normal text-center">
				For more details , don't hesitate to reach to us
			</p>
			<form onSubmit={SendMessage} ref={contactForm}>
				<div className="flex">
					<div className="w-full bg-white p-2 rounded">
						<Input
							type={"text"}
							id={"userNames"}
							refData={contactNames}
							placeholder={"Your Names"}
						/>
						<Input
							type={"email"}
							id={"email"}
							refData={contactEmail}
							placeholder={"Your E-mail"}
						/>
						<Input
							type={"text"}
							id={"subject"}
							refData={contactSubject}
							placeholder={"Your Subject"}
						/>
						<TextArea
							id={"description"}
							rows={"5"}
							refData={contactMessage}
							placeholder={"Your Message to share with us ..."}
						/>
						<div className="flex justify-between mx-3">
							<div>
								<Button name="Send Message" />
							</div>
						</div>
					</div>
				</div>
			</form>
			<h3 className="font-bold text-2lg my-2">Recent Messages</h3>
			<Messages />
		</div>
	);
}

export default Contact;
