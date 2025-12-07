import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGameSettings } from "../game/GameSettingsContext.jsx";
import { useNavigate, useParams } from "react-router-dom";

const schema = yup.object({
  diskCount: yup
    .number()
    .typeError("Введіть число")
    .min(3, "Мінімум 3 диски")
    .max(8, "Максимум 8 дисків")
    .required("Обовʼязкове поле"),
  difficulty: yup
    .string()
    .oneOf(["easy", "normal", "hard"], "Невірне значення")
    .required("Обовʼязкове поле"),
  speed: yup
    .number()
    .typeError("Введіть число")
    .min(1, "Мінімум 1")
    .max(5, "Максимум 5")
    .required("Обовʼязкове поле"),
});

function StartPage() {
  const { settings, updateSettings } = useGameSettings();
  const navigate = useNavigate();
  const { userId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: settings,
  });

  const onSubmit = (data) => {
    const normalized = {
      ...data,
      diskCount: Number(data.diskCount),
      speed: Number(data.speed),
    };
    updateSettings(normalized);
    navigate(`/${userId}/game`);
  };

  return (
    <section className="page">
      <h2>Старт</h2>
      <p>
        Стартова сторінка гри &laquo;Ханойські вежі&raquo;
      </p>

      <form className="settings-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="settings-field">
          <label>
            Кількість дисків
            <input
              type="number"
              min="3"
              max="8"
              {...register("diskCount")}
            />
          </label>
          {errors.diskCount && (
            <span className="field-error">{errors.diskCount.message}</span>
          )}
        </div>

        <div className="settings-field">
          <label>
            Рівень складності
            <select {...register("difficulty")}>
              <option value="easy">Легкий</option>
              <option value="normal">Середній</option>
              <option value="hard">Складний</option>
            </select>
          </label>
          {errors.difficulty && (
            <span className="field-error">{errors.difficulty.message}</span>
          )}
        </div>

        <div className="settings-field">
          <label>
            Швидкість анімації (1–5)
            <input
              type="number"
              min="1"
              max="5"
              {...register("speed")}
            />
          </label>
          {errors.speed && (
            <span className="field-error">{errors.speed.message}</span>
          )}
        </div>

        <button type="submit" className="primary-button">
          Почати гру
        </button>
      </form>
    </section>
  );
}

export default StartPage;
