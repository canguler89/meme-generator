import React, { Component } from 'react'
import { connect } from "react-redux";
import Items from "./components/Items"


class App extends Component {
  constructor(){
    super();
    this.state = {
      memeLimit: 10
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to the Meme factory!!!</h2>
        {
          this.props.memes.slice(0, this.state.memeLimit).map((meme,index)=>{
            return (
            <Items key={index} meme={meme} />
            )
          })
        }
      <div className="meme-button" onClick={()=> 
      this.setState({memeLimit: this.state.memeLimit + 10})
      }>Add 10 more Memes!</div>  
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}


export default connect(mapStateToProps,null)(App)
