import React from "react";
import "./GameBoard.css";

const initialTowers = [[3, 2, 1], [], []];

function GameBoard() {
  return (
    <div className="gameboard">
      <h3 className="gameboard-title">Поле гри</h3>
      <p className="gameboard-info">
        Тут відображається візуальне поле гри &laquo;Ханойські вежі&raquo;.
      </p>

      <div className="towers">
        {initialTowers.map((tower, index) => (
          <div key={index} className="tower">
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
