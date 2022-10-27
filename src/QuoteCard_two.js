import React, { Component } from 'react'
import './QuoteCard.css';

export default class QuoteCard_two extends Component {

  constructor(){
    super()

    this.state={
      title:"Quotes",
      url_one:"https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      url_two:"https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      quote_one:"",
      quote_two:""
    }

  }

  changeTitle=()=>{
    this.setState({
      title:"My Quotes",

    })

  }


  componentDidMount(){
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
    .then(res=>res.json)
    .then(response=>{
      console.log(response.data[0].quoteText)
      this.setState({
        quote_one:response.data[0].quoteText,
        quote_two:response.data[4].quoteText,
      })
    })
    .catch(err=>console.log(err))
  }


  render() {
    return (
      <div className='quotecard-space'>
        <div className='quotecard-container'>
            <h1>{this.state.title}</h1>
            <img src={this.state.url_two}/>
            <p>{this.state.quote_two}</p>
            <button onClick={this.changeTitle}>Change Parent's Title</button>
            <button onClick={this.changeTitle}>Change My Title</button>
        </div>
      </div>
    )
  }
}
