import React from 'react';

const services = [{name: "Taneční kostymy 1",}, {name: "Taneční kostymy 1",}, {name: "Taneční kostymy 1"}, {name: "Taneční kostymy 1"}]
export const Footer = () => {
    return <div id="footer" className="w-full bg-black p-24">
        <div className="grid grid-cols-4">
            {/*<div>*/}
            {/*    <div className="text-xl text-left mb-6 font-bold font-mono uppercase">Služby</div>*/}
            {/*    <ul className="leading-8">*/}
            {/*        {services.map(service => <li key={service.name}>{service.name}</li>)}*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <div>
                <div className="text-xl text-left mb-6 font-bold font-mono uppercase">Kontakt</div>
                <ul className="leading-8">
                    <li>Bobu originals s.r.o.</li>
                    <li>Baška 608, 73901, Baška</li>
                    <li>777 805 973</li>
                    <li>info@bobu.cz</li>
                </ul>
            </div>
        </div>
    </div>
}