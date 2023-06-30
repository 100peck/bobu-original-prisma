import React from "react";
import {Hero} from "@/components/hero/hero";
import {Section} from "@/components/section/section";
import {About} from "@/components/about/about";
import {ProductGrid} from "@/components/productGrid/productGrid";
import prisma from "../../prisma/lib/prisma";
import {Collection} from "@/components/collection/collection";

export default async function Home(props: React.JSX.IntrinsicAttributes) {
    const products: any = await prisma.product.findMany();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Hero/>
            <Section title="O nás">
                <About/>
            </Section>
            <Section title="Novinky">
                <ProductGrid products={products}/>
            </Section>
            <Section title="Kolekce">
                <Collection/>
            </Section>
            <Section title="Naše vize">
                <div>asdasda</div>
            </Section>
        </main>
    )
}
