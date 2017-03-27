import React from 'react'
//import {BrowserRouter as Router, Link} from 'react-router-dom'
//import Home from './Components/Home'


var ToDo =  React.createClass({

  getInitialState: function(){
   return{
    myArray: [], 
    text: '',
     complete: (!!this.complete) || false

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


    checkChange: function(e){
       
      this.setState({
      complete:e.target.checked
    })
},
  
         
      

    handleDelete: function(index){
      this.setState({
     myArray: this.state.myArray.filter(function (e, i) {
        return i !== index;
        
        })
      })
    },

    

  render: function(){
      var lineStyle={
      'textDecoration': this.state.complete ? 'line-through' : ''
    };
    
    return(
        
      <div className="todo">

          <p>todos</p>
          <form onSubmit={this.handleSubmit}> 

          <input className="todoInput" type="text" onChange={this.handleChange} placeholder="What needs to be done?" value={this.state.text}/>
          </form>
          <ul className="todoOutput"style={lineStyle}>
            {this.state.myArray.map(function(val, i){
              return <li className="outBox" key={i}> 
           
                <input className="checkBox" type="checkbox"
                checked={this.state.complete}
                  ref="complete"
                  onChange={this.checkChange}
                  /> {val} 
                  {<button className="xed" onClick={this.handleDelete.bind(this,i)}>X</button>}</li>

            }.bind(this))}
          </ul>
          

        </div>
      )
        
      
    },
})

export default ToDo
