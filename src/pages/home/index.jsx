import {React} from 'react';
import MainLayout from '../../components/layout/mainlayout';
import Suggestions from '../../components/home/suggesitions';
import Basic from '../../components/home/Basic';

const Home = () => {
    return (
        <MainLayout>
            <div className='w-full grow flex flex-col justify-start items-center pb-4'>
                <Basic/>
                <Suggestions/>
            </div>
            
        </MainLayout>
    );
};

export default Home;