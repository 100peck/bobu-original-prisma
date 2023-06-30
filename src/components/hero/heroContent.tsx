'use client';

import React from "react";
import {redirect} from "next/navigation";

import {Button} from "../button/button";

export const HeroContent = () => {

    const handleClick = () => {
        redirect("/kolekce")
    }

    return <div className="flex items-center h-screen xl:w-1/3 md:w-full m-auto ">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-7xl font-serif tracking-tight leading-none text-gray-900 lg:text-7xl dark:text-white uppercase">lorem ipsum dolor sit amte</h1>

            <div className="flex flex-col mt-8 mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Button text="Objevte novou kolekci" onClick={handleClick} type="primary"/>
            </div>
        </div>
    </div>
}