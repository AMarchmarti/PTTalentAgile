import type { RouteObject } from "react-router-dom";

import Layout from "@/presentation/components/Layout/Layout";
import Home from "@/presentation/pages/Home/Home.page";


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
						"@/presentation/pages/Results/Result.page"
					);
					return { Component: ResultPage };
				},
			},
		],
	},
];