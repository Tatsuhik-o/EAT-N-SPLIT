import "./Friend.css";
function Friend({
  friend,
  currActive,
  index,
  setCurrActive,
  setToggleNewFriend,
}) {
  const style =
    currActive === index
      ? {
          backgroundColor: "#fdf4e1",
          borderRadius: "12px",
        }
      : {};
  const oweStyle =
    friend.verdict === ""
      ? {}
      : friend.payee === "you"
      ? {
          color: "green",
        }
      : {
          color: "red",
        };
  function handleSelect() {
    currActive !== index ? setCurrActive(index) : setCurrActive(null);
    setToggleNewFriend(false);
  }
  return (
    <div className="friend" style={style}>
      <div className="picSide">
        <img src={friend.image} alt={`${friend.name} Image`} loading="lazy" />
      </div>
      <div className="infoSide">
        <div className="friendName">{friend.name}</div>
        <div className="splittedBill" style={oweStyle}>
          {friend.verdict || `You and ${friend.name} are even`}
        </div>
      </div>
      <button className="selectFriend" onClick={handleSelect}>
        {currActive === index ? "Close" : "Select"}
      </button>
    </div>
  );
}

export default Friend;
