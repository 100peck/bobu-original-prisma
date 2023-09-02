import React from "react";


const menuItems = [
    {title: "Služby", link: '#služby'},
    {title: "Kolekce", link: "#kolekce"},
    {title: "O nás", link: "#o nás"},
    {title: "Naše tvorba", link: "#naše kolekce"},
]
export const Menu = () => {
    return <ul className="mr-auto px-4 flex flex-row" data-te-navbar-nav-ref>
        {menuItems.map((item) => {
            return <li className="mb-4 pr-2" data-te-nav-item-ref key={item.title}>
                <a
                    className="block transition duration-150 ease-in-out hover:text-black-700 focus:text-black-700 disabled:text-black/30 dark:hover:text-black/80 dark:focus:text-black/80 p-2 [&.active]:text-white uppercase"
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