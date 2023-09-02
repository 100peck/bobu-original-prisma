'use client';

import React from 'react';

type Props = {
    text: string;
    link: string;
    type: 'primary' | 'secondary';
}
export const Button = ({text, link, type}: Props) => {
    const typeClass = type === 'secondary' ? 'bg-white text-black border border-black' : 'bg-white text-black';

    return <a href={link} className={`font-mono uppercase py-4 px-8 text-sm ${typeClass} transition duration-200 ease-in-out hover:bg-black/80 hover:text-white`}>
        {text}
    </a>

}