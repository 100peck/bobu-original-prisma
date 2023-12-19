'use client';

import React from 'react';
import {Button} from "@/components/button/button";
import {redirect} from "next/navigation";

export const Collection = () => {
    const handleClick = () => {
        redirect("/kolekce")
    }

    return <div className="grid lg:grid-cols-2 gap-6 m-auto text-center">
        <div className="lg:w-full bg-center bg-cover bg-about-us-1 py-28 lg:py-96"/>
        <div className="lg:w-full bg-center bg-cover bg-about-us-2 py-28 lg:py-96"/>
    </div>
}