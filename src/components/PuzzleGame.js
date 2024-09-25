import React, { useState } from 'react';

const PuzzleGame = ({ onSolve }) => {
  const [puzzleInput, setPuzzleInput] = useState('');
  const [status, setStatus] = useState('');

  const puzzleAnswer = 42; // Example solution

  const handleSolvePuzzle = () => {
    if (parseInt(puzzleInput) === puzzleAnswer) {
      setStatus('Puzzle Solved!');
      onSolve(true); // Trigger the airdrop after solving
    } else {
      setStatus('Incorrect answer, try again!');
    }
  };

  return (
    <div className="puzzle-game">
      <h3>Solve this to qualify:</h3>
      <p>What is 6 * 7?</p>
      <input
        type="number"
        value={puzzleInput}
        onChange={(e) => setPuzzleInput(e.target.value)}
      />
      <button onClick={handleSolvePuzzle}>Submit Answer</button>
      <p>{status}</p>
    </div>
  );
};

export default PuzzleGame;
