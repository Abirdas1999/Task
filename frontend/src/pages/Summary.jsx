
import Header from "../components/common/Header";
import DealerTable from "../components/Model/DealerTable";

const Summary = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Summary' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<DealerTable/>
			</main>
		</div>
	);
};
export default Summary;