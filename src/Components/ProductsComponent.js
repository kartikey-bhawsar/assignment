import React from 'react';
import ProductCard from './ProductCard';

const ProductsComponent = (props) => {
    let { products, productClicked } = props;
    return (
        <div className='container'>
            {
                products.map((product) => {
                    return <ProductCard key={product.id} product={product} productClicked={productClicked} />
                })
            }
        </div>
    )
}

export default ProductsComponent
