import React from "react";
import {Hero} from "../components/hero/hero";
import {Section} from "../components/section/section";
import {About} from "../components/about/about";
import {Collection} from "../components/collection/collection";
import {Services} from "../components/services/services";
import {Footer} from "../components/footer/footer";
import {Products} from "@/components/products/products";

import {MenuLinks} from "../components/types"

export default function Home() {

    const {ABOUT, COLLECTION, SERVICES} = MenuLinks;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Hero/>
            <Section id={SERVICES} title="Služby">
                <Services/>
            </Section>
            <Section id={COLLECTION} title="Naše Kolekce">
                <Products/>
            </Section>
            <Section id={ABOUT} title="O nás">
                <About/>
            </Section>
            <Section title="">
                <Collection/>
            </Section>
            <Footer/>
        </main>
    )
}
