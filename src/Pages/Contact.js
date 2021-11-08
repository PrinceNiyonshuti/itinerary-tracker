/** @format */

import React, { useRef } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Messages from "../Components/Messages";
import TextArea from "../Components/TextArea";

function Contact() {
	// Form variables
	const contactForm = useRef();
	const contactNames = useRef();
	const contactEmail = useRef();
	const contactSubject = useRef();
	const contactMessage = useRef();

	// Function to send message
	const SendMessage = (event) => {
		event.preventDefault();

		// Assigning Form Data
		const userNames = contactNames.current.value;
		const email = contactEmail.current.value;
		const subject = contactSubject.current.value;
		const description = contactMessage.current.value;

		const contactData = { userNames, email, subject, description };

		// Posting Data to Json file
		fetch("http://localhost:8000/messageList/?_sort=id&_order=desc", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(contactData),
		}).then(() => {
			console.log("New Message Sent");
			alert(`Dear ${userNames} , Your Message Is Sent Successfully`);
			window.location.reload();
		});
		contactForm.current.reset();
	};
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
