/* eslint-disable @typescript-eslint/no-explicit-any */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

export function renderWithRouter(children: any, routes = []) {
	const options = { element: children, path: "/" };

	const router = createMemoryRouter([{ ...options }, ...routes], {
		initialEntries: [options.path],
		initialIndex: 1,
	});

	render(<RouterProvider router={router} />);
	return router;
}

export {
	fireEvent,
	screen,
	waitFor,
	getByRole,
	within,
	act,
} from "@testing-library/react";