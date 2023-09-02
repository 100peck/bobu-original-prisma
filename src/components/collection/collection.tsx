'use client';

import React from 'react';
import {Button} from "@/components/button/button";
import {redirect} from "next/navigation";

export const Collection = () => {
    const handleClick = () => {
        redirect("/kolekce")
    }

    return <div className="grid lg:grid-cols-2 gap-6 m-auto text-center">
        <div className="lg:w-full bg-center bg-cover bg-tricka-bg py-28 lg:py-96">
            <div className="text-3xl lg:text-7xl font-serif text-white mb-6">Taneční kostymy</div>
            <Button text="Mám zájem" link="/#footer" type="primary" />
        </div>
        <div className="lg:w-full bg-center bg-cover bg-tricka-bg py-28 lg:py-96">
            <div className="text-3xl lg:text-7xl font-serif text-white mb-6">Taneční kostymy</div>
            <Button text="Mám zájem" link="/#footer" type="primary" />
        </div>
    </div>
}