import React from 'react'
//import {BrowserRouter as Router, Link} from 'react-router-dom'
//import Home from './Components/Home'


var ToDo =  React.createClass({

  getInitialState: function(){
   return{
    myArray: [], 
    text: '',
    complete: false

  }
},



  handleChange: function(e){
    this.setState({
      text:e.target.value
    })
  },

   handleSubmit: function(e){
    e.preventDefault()
    this.setState({
    text:"",
     myArray:[this.state.text, ...this.state.myArray]
    })
  },


    checkChange: function(e,c){
      this.setState({
        complete:true
        
     })
      console.log(e.target.checked)
    },
         
      

    handleDelete: function(index){
      this.setState({
     myArray: this.state.myArray.filter(function (e, i) {
        return i !== index;
        
        })
      })
    },

    

  render: function(){
      let labelStyle={
      'textDecoration': this.state.complete ? 'line-through' : ''
    };
    
    return(
        
      <div className="todo">

          <h1>todos</h1>
          <form onSubmit={this.handleSubmit}> 

          <input type="text" onChange={this.handleChange} placeholder="What needs to be done?" value={this.state.text}/>
          </form>
          <ul>
            {this.state.myArray.map(function(val, i){
              return <li key={i}> 
              <label style={labelStyle}>
                <input type="checkbox"
                  // checked={this.state.complete}
                  onChange={this.checkChange}
                  /> </label> {val} 
                  {<button onClick={this.handleDelete.bind(this,i)}>x</button>}</li>

            }.bind(this))}
          </ul>
          

        </div>
      )
        
      
    },
})

export default ToDo
