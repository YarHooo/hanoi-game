import React from "react";
import GameBoard from "../game/GameBoard.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";

function GamePage({ onFinish, onBackToStart }) {
  return (
    <section className="page">
      <h2>Основна сторінка гри</h2>
      <p>
        Тут відображається ігрове поле. На даному етапі реалізований лише
        візуальний каркас без бізнес-логіки переміщення дисків.
      </p>

      <GameBoard />

      <div className="page-actions">
        <button className="secondary-button" onClick={onBackToStart}>
          На старт
        </button>

        <PrimaryButton onClick={onFinish}>
          Перейти до результатів (плейсхолдер)
        </PrimaryButton>
      </div>
    </section>
  );
}

export default GamePage;
