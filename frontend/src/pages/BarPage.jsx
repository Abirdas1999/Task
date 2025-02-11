
import Header from "../components/common/Header";
import BarTrend from "../components/Model/BarTrend";


const BarPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Bar' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

				{/* <SalesOverviewChart /> */}
					<BarTrend/>

				{/* <motion.div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<BarTrend/>
				</motion.div> */}
			</main>
		</div>
	);
};
export default BarPage;