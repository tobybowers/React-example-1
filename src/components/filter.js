import React, { Component } from 'react';

class Filter extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.sortNews(e.target.value)
    }
    render() {
        return (
            <div className="col-12 col-sm-4">
                <select className="custom-select" onChange={(e) => this.handleChange(e)}>
                    <option value="none">Sort by</option>
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                </select>         
            </div>
        );
    }
}
  
export default Filter;