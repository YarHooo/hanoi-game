import React from "react";
import "./GameBoard.css";

function getDiskColor(disk) {
  if (disk === 1) return "#22c55e"; 
  if (disk === 2) return "#eab308"; 
  if (disk === 3) return "#ef4444"; 
  if (disk === 4) return "#3b82f6"; 
  if (disk === 5) return "#a855f7"; 
  if (disk === 6) return "#ec4899"; 
  if (disk === 7) return "#f97316"; 
  if (disk === 8) return "#14b8a6"; 

  return "#6b7280"; 
}

function GameBoard({ towers, selectedTower, onTowerClick }) {
  return (
    <div className="gameboard">
      <h3 className="gameboard-title">Поле гри</h3>
      <p className="gameboard-info">
        Гра &laquo;Ханойські вежі&raquo;. Логіка переміщення винесена
        в кастомний хук.
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
                    className="disk"
                    style={{
                      width: `${40 + disk * 24}px`,
                      backgroundColor: getDiskColor(disk),
                    }}
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
