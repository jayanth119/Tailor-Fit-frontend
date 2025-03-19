import {React} from 'react';
import MainLayout from '../../components/layout/mainlayout';
import Suggestions from '../../components/home/suggesitions';

const Home = () => {
    return (
        <MainLayout>
            <div className='w-full grow flex flex-col justify-start items-center pb-4'>
                <Suggestions/>
            </div>
        </MainLayout>
    );
};

export default Home;