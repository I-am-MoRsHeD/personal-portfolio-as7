'use client'
import { Spinner } from '../components/ui/spinner';


const LoadingPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <Spinner className='w-10 h-10' />
        </div>
    );
};

export default LoadingPage;