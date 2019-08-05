import React, { Component } from "react";
import "bulma";

class SearchBar extends Component {
    state = {
        q: "",
        per_page: 10,
        sort: ""
    };

    handleChange = event => {
        this.setState({
            q: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.q);
    };
    render() {
        return (
            <div className="section has-background-danger is-small">
                <div className="container">
                    <div className="columns">
                        <div className="column is-three-fifths is-offset-one-fifth">
                            <form onSubmit={this.handleSubmit}>
                                <div className="field">
                                    <div className="control has-icons-left">
                                        <input
                                            className="input is-rounded"
                                            name="q"
                                            type="text"
                                            placeholder="Search here ..."
                                            onChange={this.handleChange}
                                        />
                                        <span className="icon is-left">
                                            <i className="fa fa-search" />
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
