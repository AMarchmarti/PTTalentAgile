import React from "react";
import { ResultData } from "@/domain/model/Result/ResultData";
import ResultDetails from "@/presentation/components/ResultDetail/ResultDetail.component";
import ResultItem from "@/presentation/components/Resultitem/ResultItem.component";
import SkeletonResultItem from "@/presentation/components/Skeletons/SkeletonResultItem/SkeletonResultitem.component";

import ResultPageController from "./Result.page.controller";

export const ResultPage = () => {
	const { 
        data, isLoading, handleSelect, handleClose, selectedElement
    } = ResultPageController();
	return (
		<>
			<section className="flex flex-col md:flex-row mt-16 md:px-20">
				<ul className="md:w-2/3 w-full overflow-y-auto">
					{isLoading
						? Array.from({ length: 10 }).map((_, index) => (
								<SkeletonResultItem
									key={index}
									isLoading={isLoading}
								/>
						  ))
						: data?.map((result: ResultData) => (
								<ResultItem
									key={result.id}
									title={result.title}
									description={result.description}
									onClick={() => handleSelect(result)}
								/>
						  ))}
				</ul>
				<div className="md:w-1/3 w-full md:block hidden ">
					{selectedElement && (
						<ResultDetails
							image={selectedElement.image}
							url={selectedElement.url}
							title={selectedElement.title}
							content={selectedElement.description}
						/>
					)}
				</div>
			</section>
			{selectedElement && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 md:hidden">
					<div className="bg-white w-3/4 max-w-md p-6 rounded-lg shadow-lg relative">
						<button
							onClick={handleClose}
							className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
						>
							✖
						</button>
						<ResultDetails
							image={selectedElement.image}
							url={selectedElement.url}
							title={selectedElement.title}
							content={selectedElement.description}
						/>
					</div>
				</div>
			)}
		</>
	);
};
