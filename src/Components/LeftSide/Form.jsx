import { useState } from "react";
import "./Form.css";

function Form({ AddNewFriend, setToggleNewFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/128");
  function handleSubmit() {
    if (!name || !image) {
      return;
    }
    AddNewFriend({
      name,
      image,
      bill: 0,
      expanse: 0,
      payee: "you",
      verdict: "",
    });
    setToggleNewFriend(false);
  }
  return (
    <div className="form">
      <div className="friendName">
        <label htmlFor="">🧑‍🤝‍🧑 Friend Name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="pictureLink">
        <label htmlFor="">🖼️ Image URL : </label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button className="add" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default Form;
