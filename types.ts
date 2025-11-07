export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    images: {
        url: string;
        alt: string;
    }[];
    logoSvg: React.FC<{ className?: string }>;
    reviews: {
        rating: number;
        comment: string;
        author: string;
        date: string;
    }[];
    features: string[];
    shipping: string;
    payment: string;
    warranty: string;
}

export interface CartItem extends Product {
    quantity: number;
    size: string;
}
