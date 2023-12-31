import React from 'react';

const services = [
    {name: "Krejčovské služby",},
    {name: "Opravy a úpravy oděvů",},
    {name: "Šití na míru"},
    {name: "Šití málosériových zakázek"},
    {name: "Vlastní značka dámské módy"},
    {name: "Tvorba a konstrukce střihu"},
    {name: "Šití tanečních kostýmů"}
];
export const Footer = () => {
    return <div className="w-full bg-black p-24">
        <div className="grid grid-cols-3">
            <div>
                <div className="text-xl text-left mb-6 font-bold font-mono uppercase">Služby</div>
                <ul className="leading-8">
                    {services.map(service => <li key={service.name}>{service.name}</li>)}
                </ul>
            </div>
            <div>
                <div className="text-xl text-left mb-6 font-bold font-mono uppercase">Kontakt</div>
                <ul className="leading-8">
                    <li>Bobu originals, s.r.o.</li>
                    <li>Třída T.G.Masaryka 1108, Frýdek-Místek</li>
                    <li>+420 777 805 793</li>
                    <li>info@bobu.cz</li>
                </ul>
            </div>
        </div>
    </div>
}