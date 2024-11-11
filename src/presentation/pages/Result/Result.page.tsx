import { AnimalData } from "@/domain/model/Animal/AnimalData";
import ResultDetails from "@/presentation/components/ResultDetail/ResultDetail.component";
import ResultItem from "@/presentation/components/Resultitem/ResultItem.component";
import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

export const ResultPage = () => {
	const { data } = useLoaderData() as {
		data: { resultPromise: AnimalData[] };
	};
	const [selectedResult, setSelectedResult] =
		React.useState<AnimalData | null>(null);
	const handleSelect = (result: AnimalData) => {
		setSelectedResult(result);
	};
	const handleClose = () => {
		setSelectedResult(null);
	};
    console.log('first', selectedResult)
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Await resolve={data.resultPromise}>
				{(resultPromise) => (
					<>
						<section className="flex flex-col md:flex-row mt-16 md:px-20">
							<ul className="md:w-2/3 w-full overflow-y-auto">
								{resultPromise.map((animal: AnimalData) => (
									<ResultItem
										key={animal.id}
										title={animal.title}
										description={animal.description}
										onClick={() => handleSelect(animal)}
									/>
								))}
							</ul>
							<div className="md:w-1/3 w-full md:block hidden ">
								{selectedResult && (
									<ResultDetails
                                        image={selectedResult.image}
                                        url={selectedResult.url}
										title={selectedResult.title}
										content={selectedResult.description}
									/>
								)}
							</div>
						</section>
						{selectedResult && (
							<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 md:hidden">
								<div className="bg-white w-3/4 max-w-md p-6 rounded-lg shadow-lg relative">
									<button
										onClick={handleClose}
										className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
									>
										✖
									</button>
									<ResultDetails
                                        image={selectedResult.image}
                                        url={selectedResult.url}
										title={selectedResult.title}
										content={selectedResult.description}
									/>
								</div>
							</div>
						)}
					</>
				)}
			</Await>
		</Suspense>
	);
};
