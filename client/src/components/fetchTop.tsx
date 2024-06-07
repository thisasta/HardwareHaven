import React, { useState, useEffect } from "react";

const FetchTop = () => {
    const [product, setProduct] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/products/1")
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
    }, []);

    if (loading) return <p>Loading...</p>;
    if (!product) return <p>No products available</p>;

    console.log(product);

    return (
        <p>test</p>
    );
}

export default FetchTop;

