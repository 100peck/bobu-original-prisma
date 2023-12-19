import React from "react";
import {Header} from "../header/header";
import {HeroContent} from "./heroContent";

export const Hero = () => (
    <section className="w-full bg-center bg-cover bg-hero-pattern max-h-[75vh]">
        <Header />
        <HeroContent />
    </section>
);