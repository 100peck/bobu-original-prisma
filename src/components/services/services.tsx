'use client';

import React from 'react';
import {Button} from "@/components/button/button";

const services = [
    {name: "Krejčovské služby", image: "icons/001-sewing-machine.png"},
    {name: "Opravy a úpravy oděvů", image: "icons/002-needle-with-thread-to-sew-clothes.png"},
    {name: "Šití na míru", image: "icons/003-sewing.png"},
    {name: "Šití málosériových zakázek", image: "icons/004-threads.png"},
    {name: "Vlastní značka dámské módy", image: "icons/006-needle-1.png"},
    {name: "Tvorba a konstrukce střihu", image: "icons/007-design.png"},
    {name: "Šití tanečních kostýmů", image: "icons/006-needle-1.png"},
]
export const Services = () => {
    return <div className="m-auto text-center">
        <div className="grid lg:grid-cols-4 gap-28 m-auto text-center my-20">
            {services.map(service => <div key={service.name} className="m-auto text-center">
                <img src={service.image} alt={service.name} className="w-36 m-auto mb-10"/>
                <div className="text-2xl font-mono uppercase">{service.name}</div>
            </div>)}
        </div>
        <Button text="Zjisti více" onClick={() => {
        }} type="secondary"/>
    </div>
}