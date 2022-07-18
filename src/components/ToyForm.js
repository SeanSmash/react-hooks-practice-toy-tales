import React, { useState } from "react";

function ToyForm({ onNewToy }) {
  const [newToyName, setNewToyName] = useState("")
  const [newToyImage, setNewToyImage] = useState("")


  function handleNewName(e){
    setNewToyName(e.target.value)
  }

  function handleNewImage(e){
    setNewToyImage(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    const newToyData = {
      "name": newToyName, 
      "image": newToyImage, 
      "likes": 0}
    onNewToy(newToyData)
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleNewName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleNewImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
