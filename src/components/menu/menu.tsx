import React from "react";
import {MenuLinks} from '../types.ts'

const {ABOUT, COLLECTION, SERVICES} = MenuLinks;


const menuItems = [
    {title: "Služby", link: `#${SERVICES}`},
    {title: "Kolekce", link: `#${COLLECTION}`},
    {title: "O nás", link: `#${ABOUT}`},
]
export const Menu = () => {
    return <ul className="mr-auto px-4 flex flex-row" data-te-navbar-nav-ref>
        {menuItems.map((item) => {
            return <li className="mb-4 pr-2" data-te-nav-item-ref key={item.title}>
                <a
                    className="block transition duration-150 ease-in-out hover:underline hover: underline-offset-4 focus:underline focus:underline-offset-4 disabled:text-black/30 p-2 [&.active]:text-white uppercase"
                    href={item.link}
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    {item.title}
                </a>
            </li>
        })}
    </ul>
}