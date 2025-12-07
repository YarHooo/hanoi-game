import React from "react";

function StartPage({ onStart }) {
  return (
    <section className="page">
      <h2>Старт</h2>
      <button className="primary-button" onClick={onStart}>
        Почати гру
      </button>
    </section>
  );
}

export default StartPage;
