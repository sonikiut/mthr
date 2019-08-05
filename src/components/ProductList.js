import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({
    products,
    facets,
    summary,
    sorts,
    handleProductSelect
}) => {
    const info = summary.title !== undefined ? '"' + summary.title + '"' : "";
    const product_count =
        summary.product_count > 0
            ? summary.product_count + " product found."
            : "";

    const renderedSorts =
        sorts.length > 0
            ? sorts.map((sort, index) => {
                  return (
                      <option key={index} value={sort.q}>
                          {sort.title}
                      </option>
                  );
              })
            : null;

    const renderedProducts = () => {
        console.log("FACETS", facets);
        console.log("PRODUCTS", products);
        if (products.length > 0) {
            const resultProduct = products.map((product, index) => {
                return (
                    <ProductItem
                        className="card"
                        key={product.product_id}
                        product={product}
                        handleProductSelect={handleProductSelect}
                        index={index}
                    />
                );
            });
            return resultProduct;
        } else if (facets.length < 0 && products.length < 0) {
            return (
                <div className="column is-three-fifths is-offset-one-fifth">
                    <h1 className="title is-danger">Sorry :(</h1>
                </div>
            );
        } else {
            return (
                <div className="column is-three-fifths is-offset-one-fifth">
                    <figure className="image is-3by1">
                        <img alt="logo" src="./assets/logo-matahari.png" />
                    </figure>
                </div>
            );
        }
    };
    return (
        <div>
            <div className="level">
                <div className="level-left">
                    <span className="level-item title is-1">{info}</span>
                    <span className="level-item">{product_count}</span>
                </div>
                <div className="level-right">
                    <div className="select is-danger">
                        <select>{renderedSorts}</select>
                    </div>
                </div>
            </div>
            <div className="columns is-multiline">{renderedProducts()}</div>
        </div>
    );
};
export default ProductList;
