import React from "react";
import {Menu} from "../menu/menu";

export const Header = () => <header className="w-full bg-transparent">
    <nav
        className="relative flex w-full items-center justify-between py-2 text-white md:flex-wrap md:justify-start font-mono">
        <Menu/>
        <div><img src='img/eu-logo-white.png' alt="logo spolufinancováno evropskou unií" className="w-60 m-auto"/></div>
    </nav>
</header>;