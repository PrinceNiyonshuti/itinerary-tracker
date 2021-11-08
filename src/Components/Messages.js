/** @format */

import React, { useState, useEffect } from "react";

const Messages = () => {
	const [contactMessage, setSontactMessage] = useState(null);

	// Retrieve all Itenerary
	useEffect(() => {
		fetch(`http://localhost:8000/messageList`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setSontactMessage(data);
			});
	}, []);
	return (
		<div>
			{contactMessage &&
				contactMessage.map((message) => (
					<li
						key={message.id}
						className="flex justify-between items-center border-b-2 border-green-200 mt-2 p-2 cursor-pointer transition">
						<div className="flex ml-2">
							<div className="flex flex-col ml-2">
								<p className="font-semibold text-xl">
									From : {message.userNames}
								</p>
								<span className="text-sm">@{message.email}</span>
								<p className="w-64 truncate">" {message.description} "</p>
							</div>
						</div>
					</li>
				))}
		</div>
	);
};

export default Messages;
