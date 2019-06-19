import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import PlayerList from "./PlayerList";

// Show no players available if player list is empty or not passed as prop

describe("<PlayerList />", () => {
  it("should show 'No Players' if none are passed", () => {
    const { getByText } = render(<PlayerList />);

    getByText(/no players to list/i);
  });

  it("it displays all of the players provided", () => {
    const players = [
      {
        id: 1,
        name: "Rodolfo"
      },
      {
        id: 2,
        name: "Kayla"
      },
      {
        id: 3,
        name: "Jay"
      }
    ];
    const { getAllByTestId } = render(<PlayerList players={players} />);
    const renderedPlayers = getAllByTestId(/player/i);
    expect(renderedPlayers).toHaveLength(players.length);
  });

  it("it displays all of the players provided", () => {
    const players = [
      {
        id: 1,
        name: "Rodolfo"
      },
      {
        id: 2,
        name: "Kayla"
      },
      {
        id: 3,
        name: "Jay"
      }
    ];
    const { getAllByTestId } = render(<PlayerList players={players} />);
    const playerNames = players.map(p => p.name);
    const renderedPlayers = getAllByTestId(/player/i).map(li => li.textContent);
    expect(renderedPlayers).toEqual(playerNames);
  });
});
