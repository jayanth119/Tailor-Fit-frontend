import {React} from 'react';
import MainLayout from '../../components/layout/mainlayout';
import Suggestions from '../../components/home/suggesitions';
import Basic from '../../components/home/Basic';
import HomeSlider from '../../components/home/homeslide';

const Home = () => {
    return (
        <MainLayout>
            <div className='w-full grow flex flex-col justify-start items-center pb-4'>
                <Basic/>
                <Suggestions/>
                <HomeSlider/>
            </div>
            
        </MainLayout>
    );
};

export default Home;