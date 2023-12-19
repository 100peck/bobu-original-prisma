import React from 'react';
import {ProductGrid} from "@/components/productGrid/productGrid";
import prisma from "../../../prisma/lib/prisma";
import {Link} from "@/components/link/link";

export const Products = async () => {
    const products: any = await prisma.product.findMany();

    return <div className='w-full m-auto text-center'>
        <ProductGrid products={products}/>
        <Link target="_blank" link="https://bobu.cz/46_bobu-originals" text="Objevte celou kolekci"/>
    </div>
}