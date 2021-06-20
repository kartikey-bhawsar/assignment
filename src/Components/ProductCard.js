import React from 'react'

const ProductCard = (props) => {


    const buttonClicked = (event) => {
        props.productClicked(event.currentTarget.getAttribute('product'));
    }

    return (
        <div className="card">
            <h1>{props.product.name}</h1>
            <p className="price">{props.product.tag}</p><hr />
            <div>{props.product.content}</div>
            <button onClick={buttonClicked} product={props.product.name}>Free</button>
        </div>
    )
}

export default ProductCard
