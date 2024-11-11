import { Params, defer } from "react-router-dom";

import { getTimer, TimerType } from "@/presentation/utils/Timer/timer";
import { useCache } from "@/presentation/hooks/useCache/useCache.hook";



const resultService = new AnimalService();

const ResultLoader = async ({ params }: { params: Params }) => {
	const resultCache = useCache({ expiresIn: getTimer(24, TimerType.HOUR) });
	let resultPromise: ResultResponse | null;

	if (!resultCache.get("result")) {
		resultPromise = await resultService.getAllresults();
		resultCache.set("result", resultPromise);
	} else {
		resultPromise = await resultCache.get<ResultResponse>("result");
	}

	

	return defer({ data: { resultPromise } });
};

export default ResultLoader;