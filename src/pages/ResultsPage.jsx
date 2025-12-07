import React from "react";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { useNavigate, useParams } from "react-router-dom";

function ResultsPage() {
  const navigate = useNavigate();
  const { userId } = useParams();

  return (
    <section className="page">
      <h2>Результати гри</h2>
      <p>
      </p>

      <p>
       плейсхолдер сторінки результатів. Навігація між сторінками
        реалізована за допомогою React Router і динамічного параметра
        <code> userId </code> у шляху.
      </p>

      <div className="page-actions">
        <PrimaryButton onClick={() => navigate(`/${userId}/game`)}>
          Повторити гру
        </PrimaryButton>

        <button
          className="secondary-button"
          onClick={() => navigate(`/${userId}/start`)}
        >
          На старт
        </button>
      </div>
    </section>
  );
}

export default ResultsPage;
