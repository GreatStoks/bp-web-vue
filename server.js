/* eslint-disable */
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Парсинг JSON-запросов
app.use(bodyParser.json());

// Настройка соединения с базой данных MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'basso_ost',
});

// Подключение к базе данных
db.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
  } else {
    console.log('Соединение с базой данных установлено');
  }
});

// Регистрация пользователя
app.post('/api/register', (req, res) => {
  const { login, password } = req.body;

  // Выполните операции с базой данных для регистрации пользователя
  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(sql, [login, password], (err, result) => {
    if (err) {
      console.error('Ошибка при регистрации:', err);
      res.status(500).json({ message: 'Ошибка при регистрации пользователя' });
    } else {
      console.log('Пользователь успешно зарегистрирован');
      res.status(200).json({ message: 'Пользователь успешно зарегистрирован' });
    }
  });
});

// Перенаправление всех остальных запросов к клиентской части
app.get('*', (req, res) => {
  // Замените 'index.html' на путь к вашему файлу HTML клиентской части
  res.sendFile(path.join(__dirname, 'client', '/public/index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});