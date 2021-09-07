import React from "react";


class SearchBar extends React.Component {
    state = {term :""}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmitApp(this.state.term);
    }

    render(){
     return (
     <div className="ui segment">
        <form onSubmit = {this.onFormSubmit} className = "ui form">
            <label>Image Search</label>
            <div className = "field">
            <input type="text" value={this.state.value} onChange = {e=>this.setState({term:e.target.value})}/>
            </div>
        </form>
    </div>);
    }
};

export default SearchBar;