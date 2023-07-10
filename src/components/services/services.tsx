'use client';

import React from 'react';
import {Button} from "@/components/button/button";

const services = [
    {name: "Taneční kostymy 1", image: "icons/001-sewing-machine.png"},
    {name: "Taneční kostymy 2", image: "icons/002-needle-with-thread-to-sew-clothes.png"},
    {name: "Taneční kostymy 3", image: "icons/003-sewing.png"},
    {name: "Taneční kostymy 4", image: "icons/004-threads.png"},
    {name: "Taneční kostymy 5", image: "icons/006-needle-1.png"},
    {name: "Taneční kostymy 61", image: "icons/007-design.png"},
    {name: "Taneční kostymy 53", image: "icons/006-needle-1.png"},
    {name: "Taneční kostymy 22", image: "icons/002-needle-with-thread-to-sew-clothes.png"},
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