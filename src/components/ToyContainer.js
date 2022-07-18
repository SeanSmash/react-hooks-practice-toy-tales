import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList, onDelete, onLike }) {
  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */}
      {toyList.map(toy => (
        <ToyCard 
          key={toy.id}
          id={toy.id}
          name={toy.name}
          image={toy.image}
          likes={toy.likes}
          onDelete={onDelete}
          onLike={onLike}/>
      ))}
    </div>
  );
}

export default ToyContainer;
