import React from 'react';

interface DashboardCardProps {
    title: string;
    length: number;
};

const DashboardCard = ({ title, length }: DashboardCardProps) => {
    return (
        <div className="bg-white p-3 rounded-lg border border-primary w-full my-1 lg:my-0 text-center h-24 flex flex-col justify-between items-center">
            <h1 className="text-lg text-primary font-semibold self-start">Total {title}</h1>
            <p className="self-end"><span className="font-semibold">{length}</span></p>
        </div>
    );
};

export default DashboardCard;