import React from "react";
import "./GameBoard.css";

function GameBoard({ towers, selectedTower, onTowerClick }) {
  return (
    <div className="gameboard">
      <h3 className="gameboard-title">Поле гри</h3>
      <p className="gameboard-info">
         &laquo;Ханойські вежі&raquo;.
        Логіка переміщення винесена в кастомний хук
      </p>

      <div className="towers">
        {towers.map((tower, index) => (
          <div
            key={index}
            className={
              "tower" + (selectedTower === index ? " tower--selected" : "")
            }
            onClick={() => onTowerClick(index)}
          >
            <div className="tower-label">Стержень {index + 1}</div>

            <div className="tower-area">
              <div className="tower-pole" />
              <div className="tower-base" />

              <div className="tower-disks">
                {tower.map((disk, i) => (
                  <div
                    key={i}
                    className={`disk disk--size-${disk}`}
                    style={{ width: `${40 + disk * 24}px` }}
                  >
                    {disk}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
