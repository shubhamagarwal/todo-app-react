import React, { Component } from 'react';
import {Container, Progress } from 'semantic-ui-react'

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[],
            city:'',
            onEdit: false,
            index:0,
            editValue:''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }
   
  onSubmit(e){
    e.preventDefault();
    let newArray = this.state.list.slice();    
    newArray.push(this.todo.value);   
    this.setState({list:newArray});
  } 

  onDelete(index,e){
    e.preventDefault();
    let newArray = [...this.state.list];
    newArray.splice(index, 1);
    this.setState({list: newArray});
  }

  onEdit(data,index,e){
    e.preventDefault();
    this.setState({editValue:this.state.list[index],index:index, onEdit: true});
  }

  onEditSubmit(e){
    e.preventDefault();
    const newArray = Array.from(this.state.list);
    newArray[this.state.index] = this.todoNew.value;
    this.setState({onEdit: false, list: newArray});
  }

  inputBox(e){
      console.log(e.target.value);
      this.setState({editValue:e.target.value});
  }


  render() {
      console.log(this.state);
    return (
    <React.Fragment>
        <h1>Toto APP </h1>
        {/* <Container> <Progress percent={10} indicating /></Container>  */}
        Todo Progress Bar : <progress value={this.state.list.length} max="100"></progress>
      <div className="App">
          {!this.state.onEdit ? 
          (<div><input type="text" id="todo" ref={ (input) => { this.todo = input } }/>
          <button type="submit" id="submit" onClick={this.onSubmit}>Submit</button></div>) : ''}
          {this.state.onEdit ? (
              <div>
                  <input type="text" id="todo" ref={ (inputNew) => { this.todoNew = inputNew } } value={this.state.editValue} onChange={this.inputBox.bind(this)}/>
                  <button type="submit" id="submit" onClick={this.onEditSubmit.bind(this)}>Edit</button>
                  </div>) : ''}
          {this.state.list.length ? (<ul>
                 {this.state.list.map((data,i) => {
                return(
                  <li key={i}>{data}
                  <button onClick={this.onDelete.bind(this,i)}>Delete</button>
                  <button onClick={this.onEdit.bind(this,data,i)}>Edit</button></li>
                  )
              })}</ul>
                
                
          ) : ''}
      </div>
      </React.Fragment>
    );
  }
}

export default Todo;
