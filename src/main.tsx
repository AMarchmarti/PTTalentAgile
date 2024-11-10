import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/styles/index.css";
import SearchInput from "./presentation/components/SearchInput/SearchInput.component";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<SearchInput />
	</React.StrictMode>,
);
