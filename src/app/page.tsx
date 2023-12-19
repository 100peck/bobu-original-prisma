import React from "react";
import {Hero} from "../components/hero/hero";
import {Section} from "../components/section/section";
import {About} from "../components/about/about";
import {Collection} from "../components/collection/collection";
import {Services} from "../components/services/services";
import {Footer} from "../components/footer/footer";
import {Products} from "@/components/products/products";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Hero/>
            <Section title="Služby">
                <Services/>
            </Section>
            <Section title="Naše Kolekce">
                <Products/>
            </Section>
            <Section title="O nás">
                <About/>
            </Section>
            <Section title="">
                <Collection/>
            </Section>
            <Footer/>
        </main>
    )
}
