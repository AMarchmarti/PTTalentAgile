/* eslint-disable react/react-in-jsx-scope */
import type { RouteObject } from "react-router-dom";


import Home from "@/presentation/pages/Home/Home.page";
import ResultLoader from "./Loaders/resultLoader";
import Layout from "../components/Layout/Layout.component";


export const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/results",
				loader: ResultLoader,
				lazy: async () => {
					const { ResultPage } = await import(
						"@/presentation/pages/Result/Result.page"
					);
					return { Component: ResultPage };
				},
			},
		],
	},
];