import { useState } from "react";
export default function Player() {
  const [playerName, setPlayerName] = useState('unknown entity')
  const playerNameHandler = (event) => {
    setPlayerName(event.target.value)
  }
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" onChange={playerNameHandler} />
        <button>Set Name</button>
      </p>
    </section>
  );
}
