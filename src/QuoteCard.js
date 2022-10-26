import React, { Component } from 'react'
import './QuoteCard.css';

export default class QuoteCard extends Component {
  render() {
    return (
      <div className='quotecard-space'>
        <div className='quotecard-container'>
            <h1>Quotes</h1>
            <img src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
            <p>Quote-Text</p>
            <button>Change Parent's Title</button>
            <button>Change My Title</button>
        </div>
      </div>
    )
  }
}
