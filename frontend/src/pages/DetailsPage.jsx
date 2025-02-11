import Header from "../components/common/Header";
import OptionsTable from "../components/Model/OptionsTable";

const DetailsPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title='Overview' />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <OptionsTable />
            </main>
        </div>
    );
};
export default DetailsPage;