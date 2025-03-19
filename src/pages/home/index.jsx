import {React,useState} from 'react';
import MainLayout from '../../components/layout/mainlayout';
import HomeSlider from '../../components/ui/homeslide';
import Suggestion from './suggesitions';

const Home = () => {
    
    
    return (
        <MainLayout>
            <div className='w-full grow flex flex-col justify-start items-center pb-4'>
                <HomeSlider />
                <div className='w-full h-auto flex flex-col justify-start items-center py-4 gap-6'>
                    <Suggestion/>

                </div>
                
            </div>
        </MainLayout>
    );
};

export default Home;