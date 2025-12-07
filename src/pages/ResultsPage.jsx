import React from "react";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetResults } from "../store/resultsSlice.js";

function ResultsPage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const dispatch = useDispatch();

  const results = useSelector((state) => state.results.items);

  const userResults = results.filter((r) => r.userId === userId);

  const handleClear = () => {
    dispatch(resetResults());
  };

  return (
    <section className="page">
      <h2>Результати гри</h2>

      <p>
        На цій сторінці показуються результати для користувача{" "}
        <code>{userId}</code>, збережені в глобальному стані (Redux).
        Налаштування гри зберігаються через контекст, а результати — через
        Redux Toolkit.
      </p>

      {userResults.length === 0 ? (
        <p>Поки що немає жодного завершеного раунду.</p>
      ) : (
        <table className="results-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Диски</th>
              <th>Складність</th>
              <th>Швидкість</th>
              <th>Ходи</th>
              <th>Раунд</th>
              <th>Час завершення</th>
            </tr>
          </thead>
          <tbody>
            {userResults.map((res, index) => (
              <tr key={res.id}>
                <td>{index + 1}</td>
                <td>{res.diskCount}</td>
                <td>{res.difficulty}</td>
                <td>{res.speed}</td>
                <td>{res.moves}</td>
                <td>{res.round}</td>
                <td>{new Date(res.finishedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="page-actions" style={{ marginTop: "16px" }}>
        <PrimaryButton onClick={() => navigate(`/${userId}/game`)}>
          Повторити гру
        </PrimaryButton>

        <button
          className="secondary-button"
          onClick={() => navigate(`/${userId}/start`)}
        >
          На старт
        </button>

        <button className="secondary-button" onClick={handleClear}>
          Очистити результати
        </button>
      </div>
    </section>
  );
}

export default ResultsPage;
