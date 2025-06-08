import React from "react";
import ToyCard from "./ToyCard";
/* Toys were passed as  parameters from App and then i use map to iterate and pass it to
<ToyCard> */

function ToyContainer({toys, onDelete, onLikes}) {
  return (
    <div id="toy-collection">{toys.map((toy) => (
      <ToyCard 
      key={toy.id}
      id={toy.id}
      name={toy.name}
      image={toy.image}
      likes={toy.likes}
      onDelete={onDelete}
      onLikes={onLikes}/>
    ))}</div>
  );
}

export default ToyContainer;
