/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ItineraryContextProvider from "./Contexts/ItineraryContextProvider";

ReactDOM.render(
	<BrowserRouter>
		<ItineraryContextProvider>
			<App />
		</ItineraryContextProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
