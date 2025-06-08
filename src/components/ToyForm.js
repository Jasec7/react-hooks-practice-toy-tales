import React, {useState} from "react";

function ToyForm({onAddNewToy}) {
const [toyData, setToyData] = useState({
      name: "",
      image: "",
      likes: 0
});

function handleSubmit(e){
  e.preventDefault()

  fetch("http://localhost:3001/toys",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body: JSON.stringify(toyData)
  })
  .then((r) => r.json())
  .then((newToy) => {onAddNewToy(newToy)
    setToyData({name:"", image:"", likes:0})
  });
}
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={toyData.name}
          onChange={(e) => setToyData({...toyData, name: e.target.value})}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name='image'
          value={toyData.image}
          onChange={(e) => setToyData({...toyData, image: e.target.value})}
          placeholder="Enter a toy's image URL..."
          className="input-text"
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
