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
        <div className="grid grid-cols-4">
            <div>
                <div className="text-xl text-left mb-6 font-bold font-mono uppercase">Služby</div>
                <ul className="leading-8">
                    {services.map(service => <li key={service.name}>{service.name}</li>)}
                </ul>
            </div>
            <div>
                <div className="text-xl text-left mb-6 font-bold font-mono uppercase">Kontakt</div>
                <ul className="leading-8">
                    <li>Bobu originals s.r.o.</li>
                    <li>Baška 608, 73901, Baška</li>
                    <li>702 088 710</li>
                    <li>stopkadev@gmail.com</li>
                </ul>
            </div>
        </div>
    </div>
}