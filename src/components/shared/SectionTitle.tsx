import React from 'react';

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className='flex flex-row justify-center'>
            <div className="inline-block border-b-2 border-black mb-8 rounded-b-2xl px-4 mx-auto">
                <h1 className="text-3xl font-bold text-primary">{title}</h1>
            </div>
        </div>
    );
};

export default SectionTitle;
