import React from "react";
import GoogleIcon from "../Icons/GoogleIcon";
import SearchInput from "../SearchInput/SearchInput.component";
import SquareGrid from "../SquareGrid/SquareGrid.component";
import Avatar from "../Avatar/Avatar.component";
import { useNavigate } from "react-router-dom";
import { useNavigatorParams } from "@/presentation/hooks/useNavigatorParams/useNavigatorParams.hook";

const Header = () => {
	const navigate = useNavigate();
    const searchParams = useNavigatorParams();
	const search = searchParams.get("search") ?? "";
	const handleSearch = (params: string) => {
		searchParams.set("search", params);
	};
    const navigateToHome = () => {
        navigate("/");
        searchParams.remove("search");
    }
	return (
		<header className="flex justify-between p-2 content-center shadow-md fixed top-0 left-0 w-full z-10 bg-white">
			<div className="flex gap-2 items-center">
				{search.length ? (
					<>
						<GoogleIcon onClick={navigateToHome} />
						<SearchInput button={false} handleSearchInput={(value) => handleSearch(value)} initialValue={search} />
					</>
				) : (
					<>
						<h2><b>Agile Content</b></h2>
						<span>Frontend Test</span>
					</>
				)}
			</div>
			<div className="flex gap-5 items-center">
				<SquareGrid />
				<Avatar
					src="https://avatars.githubusercontent.com/u/29613995?v=4"
					alt="Avatar"
				/>
			</div>
		</header>
	);
};

export default Header;
