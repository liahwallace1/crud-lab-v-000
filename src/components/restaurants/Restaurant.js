import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput.js'

class Restaurant extends Component {
  handleDelete() {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    })
  }

  render() {
    return (
      <li>
        <div>
          {this.props.restaurant.text}
          <button onClick={() => this.handleDelete()}>Delete</button>
        </div>
        <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store}/>
      </li>
    );
  }
};

export default Restaurant;
