import { ResultData } from "@/domain/model/Result/ResultData";
import { ResultService } from "@/domain/services/Result/ResultService";
import { useNavigatorParams } from "@/presentation/hooks/useNavigatorParams/useNavigatorParams.hook";
import { useEffect, useMemo } from "react";
import useSWR from "swr";

const ResultPageController = () => {
	const resultService = new ResultService();

	const searchParams = useNavigatorParams();

	const search = searchParams.get("search") ?? "";

	const handleSelect = (result: ResultData) => {
		searchParams.set("selected", result.id.toString());
	};

	const handleClose = () => {
		searchParams.remove("selected");
	};
	const { data, isLoading, mutate } = useSWR(
		search,
		async () => {
			if (search.length !== 0) {
				return await resultService.getResultsByTypeOrName(search);
			}
		},
		{ keepPreviousData: true, fallbackData: [], revalidateOnFocus: false },
	);

	const selectedElement = useMemo(() => {
		return data?.find(
			(result: ResultData) =>
				result.id === Number(searchParams.get("selected")),
		);
	}, [data, searchParams.get("selected")]);

	useEffect(() => {
		handleClose();
		if (search.length !== 0) {
			mutate();
		}
	}, [search]);

	return {
		data,
		isLoading,
		handleSelect,
		handleClose,
		selectedElement,
	};
};

export default ResultPageController;
