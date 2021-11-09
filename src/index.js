/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ItineraryContextProvider from "./Contexts/ItineraryContextProvider";

ReactDOM.render(
	<ItineraryContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ItineraryContextProvider>,
	document.getElementById("root")
);
