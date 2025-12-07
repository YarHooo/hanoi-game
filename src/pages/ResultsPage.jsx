import React from "react";
import PrimaryButton from "../components/PrimaryButton.jsx";

function ResultsPage({ onRestart, onBackToStart }) {
  return (
    <section className="page">
      <h2>Результати гри</h2>
      <p>
        ///////
      </p>

      <p>
        Наразі це лише плейсхолдер без реальної бізнес-логіки, відповідно до
        вимог ЛР1.
      </p>

      <div className="page-actions">
        <PrimaryButton onClick={onRestart}>
          Повторити гру
        </PrimaryButton>

        <button className="secondary-button" onClick={onBackToStart}>
          На старт
        </button>
      </div>
    </section>
  );
}

export default ResultsPage;
