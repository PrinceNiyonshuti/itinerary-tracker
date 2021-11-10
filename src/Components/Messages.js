/** @format */

import React, { useContext } from "react";
import { ItineraryContext } from "../Contexts/ItineraryContext";

const Messages = () => {
	const { contactData } = useContext(ItineraryContext);
	return (
		<div>
			{contactData &&
				contactData.map((message) => (
					<li
						key={message.id}
						className="flex justify-between items-center border-b-2 border-green-200 mt-2 p-2 cursor-pointer transition">
						<div className="flex ml-2">
							<div className="flex flex-col ml-2">
								<p className="font-semibold text-xl">
									From : {message.userNames}
								</p>
								<span className="text-sm">@{message.email}</span>
								<p className=" font-normal text-justify">" {message.description} "</p>
							</div>
						</div>
					</li>
				))}
		</div>
	);
};

export default Messages;
