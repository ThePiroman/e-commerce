interface ProductCard {
    id: string;
    name: string;
    price: number;
    image: string;
}

interface ProductDetail {
    id: string;
    name: string;
    price: number;
    images: string[];
    desc: string;
    attributes: ProductAttribute[];
}

interface ProductAttribute {
    name: string;
    value: string;
}