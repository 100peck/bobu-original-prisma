import React from "react";
import {Hero} from "../components/hero/hero";
import {Section} from "../components/section/section";
import {About} from "../components/about/about";
import {ProductGrid} from "../components/productGrid/productGrid";
import prisma from "../../prisma/lib/prisma";
import {Collection} from "../components/collection/collection";
import {Services} from "../components/services/services";
import {Footer} from "../components/footer/footer";

export default async function Home() {
    const products: any = await prisma.product.findMany();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Hero/>
            <Section title="Služby">
                <Services/>
            </Section>
            <Section title="Naše Kolekce">
                <ProductGrid products={products}/>
            </Section>
            <Section title="O nás">
                <About/>
            </Section>
            <Section title="Kolekce">
                <Collection/>
            </Section>
            <Footer/>
        </main>
    )
}
