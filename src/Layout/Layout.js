/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Additinerary from "../Pages/AddItinerary";
import Itinerary from "../Pages/Itinerary";
import AllItinerary from "../Pages/AllItinerary";
import Contact from "../Pages/Contact";
import Footer from "./Footer";
import Title from "./Title";

function Layout() {
	return (
		<div className="">
			<div className="flex items-center justify-center w-screen mt-10 ">
				<div className="w-2/4 font-bold border shadow-lg p-4">
					<Title />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/add" element={<Additinerary />} />
						<Route path="/itinerary/:id" element={<Itinerary />} />
						<Route path="/all" element={<AllItinerary />} />
					</Routes>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default Layout;
