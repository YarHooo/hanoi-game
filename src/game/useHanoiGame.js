import { useState, useEffect } from "react";

const DEFAULT_DISK_COUNT = 3;

function createInitialTowers(diskCount = DEFAULT_DISK_COUNT) {
  const firstTower = [];
  for (let i = diskCount; i >= 1; i--) {
    firstTower.push(i); 
  }
  return [firstTower, [], []];
}

export function useHanoiGame(diskCount = DEFAULT_DISK_COUNT) {
  const [towers, setTowers] = useState(() => createInitialTowers(diskCount));
  const [selectedTower, setSelectedTower] = useState(null);
  const [moves, setMoves] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setTowers(createInitialTowers(diskCount));
    setMoves(0);
    setSelectedTower(null);
    setIsFinished(false);
  }, [diskCount]);

  const handleTowerClick = (index) => {
    if (isFinished) return;

    if (selectedTower === null) {
      if (towers[index].length === 0) {

        return;
      }
      setSelectedTower(index);
      return;
    }

    if (selectedTower === index) {
      setSelectedTower(null);
      return;
    }

    moveDisk(selectedTower, index);
    setSelectedTower(null);
  };

  const moveDisk = (fromIndex, toIndex) => {
    setTowers((prevTowers) => {
      const newTowers = prevTowers.map((tower) => [...tower]);

      const fromTower = newTowers[fromIndex];
      const toTower = newTowers[toIndex];

      if (fromTower.length === 0) {
        return prevTowers;
      }

      const movingDisk = fromTower[fromTower.length - 1];
      const topToDisk = toTower[toTower.length - 1];

      if (topToDisk !== undefined && topToDisk < movingDisk) {
        return prevTowers;
      }

      fromTower.pop();
      toTower.push(movingDisk);

      setMoves((prev) => prev + 1);

      const isSolved =
        newTowers[1].length === diskCount ||
        newTowers[2].length === diskCount;

      if (isSolved) {
        setIsFinished(true);
      }

      return newTowers;
    });
  };

  const resetGame = () => {
    setTowers(createInitialTowers(diskCount));
    setMoves(0);
    setSelectedTower(null);
    setIsFinished(false);
  };

  return {
    towers,
    selectedTower,
    moves,
    isFinished,
    handleTowerClick,
    resetGame,
  };
}
