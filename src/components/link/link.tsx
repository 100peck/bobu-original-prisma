import React from 'react'

type Props = {
    link: string;
    text: string;
}
export const Link = ({link, text}: Props) => {

    return <a href={link}
       className="bg-white text-black border border-black font-mono uppercase py-4 px-8 text-sm transition duration-200 ease-in-out hover:bg-black/80 hover:text-white">{text}</a>
}