import { useEffect, useState } from "react";
import "./RightSide.css";
function RightSide({ friend, ModifyFriendValue, currActive }) {
  const [bill, setBill] = useState(0);
  const [expanse, setExpanse] = useState(0);
  const [payee, setPayee] = useState("you");

  useEffect(() => {
    setBill(friend.bill);
    setExpanse(friend.expanse);
    setPayee(friend.payee);
  }, [currActive]);

  function handleBill(e) {
    setBill(Number(e.target.value));
    ModifyFriendValue("bill", e.target.value, currActive);
  }
  function handleExpanse(e) {
    setExpanse(Number(e.target.value));
    ModifyFriendValue("expanse", e.target.value, currActive);
  }
  function handlePayee(e) {
    setPayee(e.target.value);
    ModifyFriendValue("payee", e.target.value, currActive);
  }
  function handleVerdict() {
    if (payee === "you") {
      ModifyFriendValue(
        "verdict",
        `You owe ${friend.name} ${bill - expanse}$`,
        currActive
      );
    } else {
      ModifyFriendValue(
        "verdict",
        `${friend.name} owe You ${bill - expanse}$`,
        currActive
      );
    }
  }
  return (
    <>
      {currActive !== null ? (
        <div className="rightside">
          <div className="title">
            <h2>Split a bill with {friend.name}</h2>
          </div>
          <div className="billDiv">
            <label htmlFor="">💰 Bill Value : </label>
            <input type="number" value={bill} onChange={handleBill} />
          </div>
          <div className="expanseDiv">
            <label htmlFor="">🧍 Your Expanse : </label>
            <input type="number" value={expanse} onChange={handleExpanse} />
          </div>
          <div className="otherExpanseDiv">
            <label htmlFor="">🧑‍🤝‍🧑 {friend.name}'s Expanse : </label>
            <input type="text" disabled={true} value={bill - expanse || ""} />
          </div>
          <div className="payeeDiv">
            <label htmlFor="">🤑 Who Is Paying The Bill : </label>
            <select value={payee} onChange={handlePayee}>
              <option value="you">You</option>
              <option value="notYou">{friend.name.toUpperCase()}</option>
            </select>
          </div>
          <div className="sumBill">
            <button onClick={handleVerdict}>Split Bill</button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default RightSide;
