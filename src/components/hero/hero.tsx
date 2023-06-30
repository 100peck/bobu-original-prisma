import React from "react";
import {Header} from "../header/header";
import {HeroContent} from "./heroContent";

export const Hero = () => <section className="w-full bg-center bg-cover bg-hero-pattern min-h-screen">
    <Header/>
    <HeroContent/>
</section>