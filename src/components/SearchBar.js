import React from "react";

class SearchBar extends React.Component {
    default_search_text = "Search Here";

    state = {
        search: this.default_search_text,
    };

    onInputChange = (event) => {
        this.setState({search: event.target.value});
    };

    onClick = (event) => {
        if (event.target.value === this.default_search_text) {
            this.setState({search: ""});
        }
    };

    onBlur = (event) => {
        if (event.target.value === "") {
            this.setState({search: this.default_search_text});
        }
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSearchSubmit(this.state.search);
    };

    render() {
        return (<div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={this.state.search}
                        onChange={this.onInputChange}
                        onClick={this.onClick}
                        onBlur={this.onBlur}
                    />
                </div>
            </form>
        </div>);

    }

}

export default SearchBar;