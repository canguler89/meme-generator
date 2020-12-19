import React, { Component } from 'react'
import { connect } from "react-redux";
import Items from "./components/Items";
import 'bootstrap/dist/css/bootstrap.min.css';


import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

class App extends Component {
  constructor(){
    super();
    this.state = {
      memeLimit: 10,
      text0: "",
      text1: ""
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to the Meme factory!!!</h2>

            <Form inline id="form1">
              <FormGroup className="mr-3">
                <FormLabel className="mr-2">Top</FormLabel>
                {" "}
                <FormControl 
                type="text"
                onChange={event =>this.setState({ text0: event.target.value})}
                ></FormControl>
              </FormGroup>
              {" "}
              <FormGroup>
                <FormLabel className="mr-2">Bottom</FormLabel>
              {" "}
                <FormControl
                type="text"
                onChange={event => this.setState({ text1: event.target.value})}
                >
                </FormControl>
              </FormGroup>
            </Form>
       
        {
          this.props.memes.slice(0, this.state.memeLimit).map((meme,index)=>{
            return (
            <Items 
            key={index} 
            meme={meme} 
            text0={this.state.text0}
            text1={this.state.text1}
            />
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
