import React from 'react';

export type Product = {
    id: string,
    title: string,
    content: string,
    imageUrl: string,
    link: string,
}

type Props = {
    products: Product[]
}
export const ProductGrid = ({products}: Props) => <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
    {products.map((product) => {
        const {id, title, imageUrl, link} = product;

        return <div key={id} className="overflow-hidden bg-cover bg-no-repeat text-center">
            <a className="" href={link} target="_blank">
                <img src={imageUrl} alt={`${title}-product-image`}/>
                <div className="font-mono uppercase pt-4">{title}</div>
            </a>
        </div>
    })}
</div>;