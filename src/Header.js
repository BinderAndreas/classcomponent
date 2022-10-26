import React, { Component } from 'react'
import './Header.css';


export default class Header extends Component {
  render() {
    return (
      <div className="header-containter">
        <div className='profile'>
          <p>John Doe</p>
          <img src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
        </div>
        <button>Change User</button>
      </div>
    )
  }
}
