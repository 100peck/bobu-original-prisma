import React from 'react';

type Props = {
    title: string;
    children: React.ReactNode;
}
export const Section = ({title, children}: Props) => {
    return <div className="w-full bg-white px-7 py-14 lg:px-14 lg:py-24 text-black">
        <h1 className="text-6xl text-center font-serif mb-10">{title}</h1>
        {children}
    </div>
}