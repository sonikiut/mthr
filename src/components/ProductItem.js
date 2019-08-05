import React from "react";
import "bulma";

const ProductItem = ({ product, index, handleProductSelect }) => {
    return (
        <div className="column is-half" key={index}>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-3by4">
                        <img
                            onMouseOver={() => {
                                alert("huhy");
                            }}
                            alt={product.product_sku}
                            src={product.images[0].thumbnail}
                        />
                    </figure>
                    <p className="card-header-title">{product.brand.name}</p>
                </div>
                <div className="card-content">
                    <div className="content">
                        {product.product_title}
                        <br />
                        {product.pricing.formatted.effective_price}
                        <br />
                        <span
                            style={{
                                textDecorationLine: "line-through"
                            }}
                        >
                            {product.pricing.original.base_price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductItem;
