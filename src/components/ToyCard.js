import React from "react";
/* ToyCard parameters came from <ToyContainer>  */
function ToyCard({id, name, image, likes, onDelete, onLikes}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={() => onLikes(id, likes + 1)}className="like-btn">Like {"<3"}</button>
      <button onClick={() => onDelete(id)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
