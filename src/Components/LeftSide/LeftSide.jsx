import { useState } from "react";
import Friend from "./Friend";
import Form from "./Form";
import "./LeftSide.css";
function LeftSide({ friends, AddNewFriend, currActive, setCurrActive }) {
  const [toggleNewFriend, setToggleNewFriend] = useState(false);
  return (
    <div className="leftside">
      {friends?.map((friend, index) => {
        return (
          <Friend
            friend={friend}
            key={index}
            currActive={currActive}
            setCurrActive={setCurrActive}
            index={index}
          />
        );
      })}
      {toggleNewFriend && friends.length < 5 && (
        <Form
          AddNewFriend={AddNewFriend}
          setToggleNewFriend={setToggleNewFriend}
          friends={friends}
        />
      )}
      <button
        className="addfriend"
        onClick={() => setToggleNewFriend(!toggleNewFriend)}
      >
        {toggleNewFriend && friends.length < 5 ? "Close" : "Add Friend"}
      </button>
    </div>
  );
}

export default LeftSide;
