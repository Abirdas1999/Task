import Header from "../components/common/Header";
// import { motion } from "framer-motion";


import ChartTrend from "../components/Model/ChartTrend";



const ChartPages = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title={"Chart"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<ChartTrend/>
			</main>
		</div>
	);
};
export default ChartPages;