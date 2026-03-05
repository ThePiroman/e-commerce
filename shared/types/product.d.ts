interface ProductCard {
    id: string;
    name: string;
    price: TypedMoney;
    image: string;
}

interface ProductDetail {
    id: string,
    name: string,
    description: string,
    attributes: Attribute[],
    variantAttributes: Attribute[],
    variants: ProductVariant,
    price: TypedMoney,
    images: Image[]
}