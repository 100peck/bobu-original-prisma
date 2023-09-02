'use client';

import React from "react";
import {redirect} from "next/navigation";

import {Button} from "../button/button";

export const HeroContent = () => {

    const link = '#služby';

    return <div className="flex h-screen w-full mx-auto ">
        <div className="md:mt-40 mt-20 py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-12">
            <div className="mb-20">
                <h1 className="mb-4 text-4xl font-serif tracking-tight leading-none text-gray-900 lg:text-8xl dark:text-white uppercase">Krejčovství
                    a šicí dílna</h1>
                <h2 className="lg:text-2xl text-xl font-mono uppercase">Bobu originals s.r.o.</h2>
            </div>

            <div
                className="flex flex-col mt-8 mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Button text="Co umíme" link={link} type="primary"/>
            </div>
        </div>
    </div>
}