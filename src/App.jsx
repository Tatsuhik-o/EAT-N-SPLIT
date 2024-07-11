import { useState } from "react";
import "./App.css";
import LeftSide from "./Components/LeftSide/LeftSide";
import RightSide from "./Components/RightSide/RightSide";

//https://i.pravatar.cc/128

function App() {
  const [friends, setFriends] = useState([]);
  const [currActive, setCurrActive] = useState(null);
  const fallBack = { name: "", image: "", bill: 0, expanse: 0, payee: "you" };
  function AddNewFriend(newFriend) {
    setFriends([...friends, newFriend]);
  }
  function ModifyFriendValue(key, value, index) {
    setFriends(
      friends.map((elem, idx) => {
        if (idx !== index) return elem;
        return { ...elem, [key]: value };
      })
    );
  }
  return (
    <div className="app">
      <LeftSide
        friends={friends}
        AddNewFriend={AddNewFriend}
        currActive={currActive}
        setCurrActive={setCurrActive}
      />
      <RightSide
        friend={friends[currActive] || fallBack}
        ModifyFriendValue={ModifyFriendValue}
        currActive={currActive}
      />
    </div>
  );
}

export default App;
