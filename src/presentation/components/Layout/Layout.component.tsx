import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
