/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Title from "./Title";
import Main from "./Main";
import AddItenary from "./AddItenary";
import Itenary from "./Itenary";
import Footer from "./Footer";
import About from "./About";

const Layout = () => {
	return (
		<Router>
			<div className="">
				<div className="flex items-center justify-center w-screen mt-10 ">
					<div className="w-2/4 font-bold border shadow-lg p-4">
						<Title />
						<Switch>
							<Route exact path="/">
								<Main />
							</Route>
							<Route exact path="/about">
								<About />
							</Route>
							<Route path="/add">
								<AddItenary />
							</Route>
							<Route path="/itenary/:id">
								<Itenary />
							</Route>
						</Switch>
						<Footer />
					</div>
				</div>
			</div>
		</Router>
	);
};
export default Layout;
