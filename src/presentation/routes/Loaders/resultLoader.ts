import { Params, defer } from "react-router-dom";

import { getTimer, TimerType } from "@/presentation/utils/Timer/timer";
import { useCache } from "@/presentation/hooks/useCache/useCache.hook";
import { AnimalService } from "@/domain/services/Animal/AnimalService";
import { AnimalData } from "@/domain/model/Animal/AnimalData";



const resultService = new AnimalService();

const ResultLoader = async ({ params }: { params: Params }) => {
	const resultCache = useCache({ expiresIn: getTimer(24, TimerType.HOUR) });
	let resultPromise: AnimalData[] | null;

	if (!resultCache.get("result")) {
		resultPromise = await resultService.getAnimalsByTypeOrName(params.query || "");
		resultCache.set("result", resultPromise);
	} else {
		resultPromise = await resultCache.get<AnimalData[]>("result");
	}

	

	return defer({ data: { resultPromise } });
};

export default ResultLoader;