# Hanoi Game - Лабораторна робота №1

Реалізація каркаса застосунку гри **«Ханойські вежі»** 

## ЛР1
Створити структуру React-застосунку без бізнес-логіки:
- правильний розподіл на сторінки
- правильний розподіл на компоненти
- статичні плейсхолдери 
- базові стилі та компоненти

## Структура проєкту
src/
components/
Header.jsx
Header.css
PrimaryButton.jsx
PrimaryButton.css

pages/
StartPage.jsx
GamePage.jsx
ResultsPage.jsx

game/
GameBoard.jsx
GameBoard.css

App.jsx
App.css
main.jsx
index.css


## 🧩 Реалізовано

### 3 сторінки:
- StartPage - старт застосунку
- GamePage - сторінка з ігровим полем (плейсхолдер)
- ResultsPage - плейсхолдер результатів

### Компоненти:
- Header - спільний для всіх сторінок
- PrimaryButton - універсальна кнопка
- GameBoard - статичний каркас поля для гри

### Інше:
- Навігація між сторінками через `useState`
- Базові стилі
- Повністю без бізнес-логіки 



