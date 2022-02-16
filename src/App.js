import React, { Component } from 'react';

class App extends Component {
  constructor (props){
    super(props);

    this.state={
      newItem:"",
      list: []
    }
  }

  addItem(){
    //create item with unique id
    const newItem={
      id: 1+Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem)

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    });
  }



  render(){
    return (
      <main className="App">
      <section className="row">
        <div className="col col-12">
          <h1>To Do List</h1>
          <p>Add an Item...</p>
          <input
            type="text"
            placeholder="Type item here ..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            onClick={() => this.addItem()}
          >
            Add
          </button>
        </div>
      </section>
    </main>
  );
}
}

export default App;
