import React, { Component } from 'react'
import logo from "./logo.svg";

export default class Theme extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        color_value:"",
      }
    }
   
ChangeColor = (event) => {
    this.setState({color_value:event.target.value})
    // alert(this.state.color_value);
}
  render() {
    if(this.state.color_value===''){
        return (
            <div style={{backgroundColor:"White",width:"100%",height:"100vh",textAlign:"center"}}>
               <img src={logo} className="App-logo" alt="logo" />
                <button className='dark'  value="Dark" onClick={this.ChangeColor}>Dark</button>
                <button className='light' value="Light" onClick={this.ChangeColor}>Light</button>
                <button className='party' value="Party" onClick={this.ChangeColor}>Party</button>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </div>
          )
    }
    else if(this.state.color_value==='Dark'){
        return (
        
            <div style={{backgroundColor:"black",width:"100%",height:"100vh"}}>
               <img src={logo} className="App-logo" alt="logo" />
                <button className='dark'  value="Dark" onClick={this.ChangeColor}>Dark</button>
                <button className='light' value="Light" onClick={this.ChangeColor}>Light</button>
                <button className='party' value="Party" onClick={this.ChangeColor}>Party</button>
                <img src="https://c.tenor.com/5nma1uQBooYAAAAC/anime-dark.gif" className="App-logo" alt="logo" />
            </div>
          )
    }
    else if(this.state.color_value==='Light'){
        return (
        
            <div style={{backgroundColor:"lightgreen",width:"100%",height:"100vh"}}>
               <img src={logo} className="App-logo" alt="logo" />
                <button className='dark'  value="Dark" onClick={this.ChangeColor}>Dark</button>
                <button className='light' value="Light" onClick={this.ChangeColor}>Light</button>
                <button className='party' value="Party" onClick={this.ChangeColor}>Party</button>
                <img src="https://64.media.tumblr.com/1e90f7b46e01ab3bf70a618ad7dd72c6/tumblr_n677m1wyNa1tbh1dho1_500.gifv" className="App-logo" alt="logo" style={{}} />
            </div>
          )
    }
    else if(this.state.color_value==='Party'){
        return (
            <div style={{backgroundColor:"violet",width:"100%",height:"100vh"}}>
               <img src={logo} className="App-logo" alt="logo" />
                <button className='dark'  value="Dark" onClick={this.ChangeColor}>Dark</button>
                <button className='light' value="Light" onClick={this.ChangeColor}>Light</button>
                <button className='party' value="Party" onClick={this.ChangeColor}>Party</button>
                <img src="https://i.gifer.com/fxt5.gif" className="App-logo" alt="logo" style={{color:"black"}}/>
            </div>
          )
    }
    
  }
}
