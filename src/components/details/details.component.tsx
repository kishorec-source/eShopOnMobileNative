import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { addToCartItem } from "../../store/cart/cart.action";
import { selectCartLists } from "../../store/cart/cart.selector";
import { ProductList } from "../productlists/productlists.component"; // Assuming you have a list of products available

const Details = () => {
    const { productId } = useParams(); // Assume the route is set up to pass productId
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(selectCartLists);

    // Mock product data. In a real scenario, you might fetch this from a server.
    const product: ProductList | undefined = {
        id: Number(productId),
        category: "Electronics",
        image: "/path/to/image.jpg",
        price: 499,
        rating: { rate: 4.5, count: 120 },
        title: "Sample Product",
        description: "string ache"
    };

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        dispatch(addToCartItem(cartItems, { title: product.title, image: product.image, price: product.price, id: product.id, description: product.description }));
    };

    return (
        <div className='product-detail-page'>
            <img src={product.image} alt={product.title} className='product-detail-image' />
            <div className='product-detail-info'>
                <h2 className='product-detail-title'>{product.title}</h2>
                <span className='product-detail-category'>{product.category}</span>
                <p className='product-detail-price'>₹ {product.price}</p>
                <div className='product-detail-rating'>
                    <div>
                        {product.rating.rate} ({product.rating.count} {product.description})
                    </div>
                </div>
                <button onClick={handleAddToCart} type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Details;
