import React from "react";

export default function PlayerList({ players = [] }) {
  if (!players.length) {
    return <h2>No players to list</h2>;
  }
  return (
    <ul>
      {players.map(p => (
        <li data-testid="player" key={p.id}>
          {p.name}
        </li>
      ))}
    </ul>
  );
}
// Displays the list of users
// displays all of the items
