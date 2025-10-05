import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

interface IProps {
    children: React.ReactNode;
};

const HomeLayout = ({ children }: IProps) => {
    return (
        <div>
            <Navbar />
            <div className='min-h-dvh'>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default HomeLayout;