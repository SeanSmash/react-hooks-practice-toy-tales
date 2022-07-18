import React, { useState } from "react";

function ToyCard({ id, name, image, likes, onDelete, onLike }) {
  const [newLikes, setNewLikes] = useState(likes)

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    onDelete(id)
  }

  function handleLike(){
    setNewLikes(newLikes + 1)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "likes": newLikes })
    })
      .then(r => r.json())
      .then(data => onLike(data))
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
