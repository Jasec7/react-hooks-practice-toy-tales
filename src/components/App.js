import React, { useEffect, useState } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";


function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  };

  function handleNewToy(newToy){
    setToys([...toys, newToy])
  };

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((r) => r.json())
    .then((toys) => setToys(toys))
  },[])

  function handleDelete(id){
    fetch(`http://localhost:3001/toys/${id}`,{
      method:"DELETE"
    })
    .then(() => {
      const updatedToys = toys.filter((toy) => toy.id !==id)
      setToys(updatedToys)
      console.log("i was erased", id)
    })
  };

  function handleLikes(id, updatedLikes){
    fetch(`http://localhost:3001/toys/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({likes: updatedLikes})
    })
    .then((r) => r.json())
    .then((brandNewToy) => {
      const updateLike = toys.map((toy) => toy.id === brandNewToy.id ? brandNewToy : toy);
      setToys(updateLike)
      console.log("I was cliked", id)
    });
  };


 
  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddNewToy={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={handleDelete} onLikes={handleLikes} />
    </>
  );
}

export default App;
