/* eslint-disable react/react-in-jsx-scope */
import type { RouteObject } from "react-router-dom";

import Layout from "../components/Layout/Layout.component";


export const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
	
	},
];