import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(r => r.json())
      .then(data => setToyList(data))
  }, [toyList])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToyData){
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": newToyData.name,
        "image": newToyData.image,
        "likes": newToyData.likes
      })
    })
      .then(r => r.json())
      .then(data => setToyList([...toyList, data]))
  }

  function handleDelete(id){
    const updatedToyList = toyList.filter(toy => {
      return (toy.id === id ? null : true)
    })
    setToyList(updatedToyList)
  }

  function handleLike(toyData){
    const updatedToyList = toyList.filter(toy => {
      return (toy.likes === toyData.likes ? toyData : true)
    })
    setToyList(updatedToyList)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toyList={toyList} 
        onDelete={handleDelete} 
        onLike={handleLike} />
    </>
  );
}

export default App;

/*
App
  |_Header
  |_ ToyForm
  |_ToyContainer
    |_ToyCard
*/
