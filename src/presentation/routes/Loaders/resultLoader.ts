import { Params, defer } from "react-router-dom";
import { useCache } from "../../hooks/useCache/useCache.hook";
import { getTimer } from "../../utils/Timer/timer";



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

	const result = resultPromise?.feed.entry.find(
		(result) => result.id.attributes["im:id"] === params.id,
	);

	return defer({ data: { result } });
};

export default ResultLoader;