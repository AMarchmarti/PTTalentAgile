import React from "react";
import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";
import { useNavigatorParams } from "@/presentation/hooks/useNavigatorParams/useNavigatorParams.hook";
import { ResultPage } from "@/presentation/pages/Result/Result.page";
import Home from "@/presentation/pages/Home/Home.page";

const Layout = () => {
    const searchParams = useNavigatorParams();
	const search = searchParams.get("search") ?? "";
	return (
		<main className="h-svh">
			<Header />
			<section className="h-full">
				{search.length ? <ResultPage /> : <Home  />}
			</section>
			<Footer />
		</main>
	);
};

export default Layout;
