import React, { Component } from 'react'
import './Header.css';


export default class Header extends Component {

constructor(){
  super()
  this.state={
    username:"John Doe", 
    image_url:"https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  }


}

changeUser=()=>{
  this.setState({
    username:"Jane Doe",
    image_url:"https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  })
}


  render() {
    return (
      <div className="header-containter">
        <div className='profile'>
          <p>{this.state.username}</p>
          <img src={this.state.image_url}/>
        </div>
        <button onClick={this.changeUser}>Change User</button>
      </div>
    )
  }
}
