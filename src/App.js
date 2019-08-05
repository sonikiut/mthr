import React, { Component } from "react";
import matahari from "./apis/matahari";
import "./App.sass";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import "bulma";

class App extends Component {
    state = {
        summary: {},
        products: [],
        selectProducts: null,
        sorts: {},
        facets: []
    };
    handleSubmit = async strquery => {
        const response = await matahari.get("products/search", {
            params: {
                q: strquery,
                per_page: 36
            }
        });
        this.setState({
            q: strquery,
            products: response.data.data.products,
            summary: response.data.data.info,
            sorts: response.data.data.sorts,
            facets: response.data.data.facets
        });
    };

    handleProductSelect = product => {};
    render() {
        return (
            <div>
                <SearchBar handleFormSubmit={this.handleSubmit} />
                <div className="section">
                    <div className="container">
                        <ProductList
                            className="columns"
                            handleProductSelect={this.handleProductSelect}
                            products={this.state.products}
                            summary={this.state.summary}
                            sorts={this.state.sorts}
                            facets={this.state.facets}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
