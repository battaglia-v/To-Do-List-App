import React, { useState } from "react";
import ToDoItem from "./ToDoItem";


function App() {
   
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange (event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(event) {
    event.preventDefault();
    setItems( (prevItems) => {
      return [...prevItems, inputText];
    })
     setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems)=> {
      return prevItems.filter(
        (item, index) => {
          return index !== id;
        }
      )
    })
  
  }
  

 
  
  
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form onSubmit={addItem}>
          <input
            type="text"
            value={inputText}
            name="item"
            onChange={handleChange}
          />
          <button>
            <span>Add</span>
          </button>
        </form>
      </div>
      <div>
        <ul>
          {items.map((eachItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={eachItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
