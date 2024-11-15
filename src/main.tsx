import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "@/presentation/routes/main";
import "@/assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(

		<RouterProvider router={router} />

);
