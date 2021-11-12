/** @format */

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ItineraryContext } from "./ItineraryContext";

const ItineraryContextProvider = (props) => {
	const [itenaryData, setItenaryData] = useState(null);
	const [itenaryAllData, setItenaryAllData] = useState(null);
	const [contactData, setContactData] = useState(null);

	const navigate = useNavigate();

	// Retrieve all Itenerary with limit of 3
	useEffect(() => {
		fetch(`http://localhost:8000/itenaryList/?_limit=3`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setItenaryData(data);
			});
	}, []);

	// Retrieve all Itenerary
	useEffect(() => {
		fetch(`http://localhost:8000/itenaryList`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setItenaryAllData(data);
			});
	}, []);

	// Delete Itenerary
	const deleteItenary = (ItenaryId) => {
		fetch(`http://localhost:8000/itenaryList/` + ItenaryId, {
			method: "DELETE",
		}).then(() => {
			console.log("Itinerary Deleted");
			window.location.reload();
		});
	};

	// Adding new itinerary Section
	// Form variables
	const itenaryTitle = useRef();
	const itenaryDate = useRef();
	const itenaryTime = useRef();
	const itenaryDescription = useRef();
	const itenaryForm = useRef();

	const newItenary = (event) => {
		event.preventDefault();

		const title = itenaryTitle.current.value;
		const date = itenaryDate.current.value;
		const time = itenaryTime.current.value;
		const description = itenaryDescription.current.value;
		const priority = false;

		const itinerary = { title, date, time, description, priority };

		fetch("http://localhost:8000/itenaryList", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(itinerary),
		}).then(() => {
			console.log("New Itinerary added");
			
			navigate("/");
			window.location.reload();
			
		});

		itenaryForm.current.reset();
	};

	// Sending Contact Message
	// Contact Form variables
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

		// Posting Contact Message Data to Json file
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

	// Retrieve all Message list
	useEffect(() => {
		fetch(`http://localhost:8000/messageList`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setContactData(data);
			});
	}, []);

	// Making Priority Itinerary
	const handlePriority = (itineraryUpdate) => {
		const { id, title, date, time, description, priority } = itineraryUpdate;

		if (priority === true) {
			const priority = false;
			const updateData = { title, date, time, description, priority };
			fetch(`http://localhost:8000/itenaryList/` + id, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updateData),
			}).then(() => {
				console.log("Itinerary Updated to non-priority");
				window.location.reload();
			});
		} else {
			const priority = true;
			const updateData = { title, date, time, description, priority };
			fetch(`http://localhost:8000/itenaryList/` + id, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updateData),
			}).then(() => {
				console.log("Itinerary Updated to priority");
				window.location.reload();
			});
		}
	};

	const value = {
		itenaryData,
		itenaryAllData,
		newItenary,
		itenaryTitle,
		itenaryDate,
		itenaryTime,
		itenaryDescription,
		itenaryForm,
		deleteItenary,
		contactForm,
		contactNames,
		contactEmail,
		contactSubject,
		contactMessage,
		SendMessage,
		contactData,
		handlePriority,
	};
	return (
		<ItineraryContext.Provider value={value}>
			{props.children}
		</ItineraryContext.Provider>
	);
};

export default ItineraryContextProvider;
