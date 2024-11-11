import React from "react";

import SearchInput from "@/presentation/components/SearchInput/SearchInput.component";
import { useNavigatorParams } from "@/presentation/hooks/useNavigatorParams/useNavigatorParams.hook";

const Home = () => {
	const searchParams = useNavigatorParams();
	const search = searchParams.get("search") ?? "";
	const handleSearch = (params: string) => {
		searchParams.set("search", params);
	};
	return (
		<div className="flex flex-col items-center justify-center h-screen gap-5" >
			<div>
				<img
					alt="Google"
					height="92"
					src="https://www.google.es/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
					width="272"
				/>
			</div>
			<SearchInput
				button={true}
				handleSearchInput={(params) => handleSearch(params)}
				initialValue={search}
			/>
		</div>
	);
};

export default Home;
