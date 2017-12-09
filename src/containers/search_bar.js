import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  onInputChange(event) {
    const term = event.target.value;
    this.setState({term});
  }
  onFormSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <form className="input-group"
        onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a 5 Day Forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  };
}