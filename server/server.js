/* eslint-disable */
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const bcrypt = require('bcrypt');

const app = express();

app.use(cors());

// Парсинг JSON-запросов
app.use(bodyParser.json());

// Создайте подключение к базе данных MySQL
const db = mysql.createConnection({
  host: 'localhost', // Замените на IP-адрес вашей базы данных
  user: 'root', // Замените на имя пользователя базы данных
  password: '', // Замените на пароль базы данных
  database: 'basso_ost' // Замените на имя вашей базы данных
});

// Подключение к базе данных
db.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных: ' + err.message);
  } else {
    console.log('Подключение к базе данных успешно установлено');
  }
});

// Роут для записи логина и пароля пользователя
app.post('/api/register', (req, res) => {
  const { id, login, email, password, role } = req.body;


  var salt = bcrypt.genSaltSync(10);
  var passwordHash = bcrypt.hashSync(password, salt)

  // Вставляем данные в таблицу пользователей (замените 'users' на имя вашей таблицы)
  const sql = 'INSERT INTO users (id, login, email, password, role) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [id, login, email, passwordHash, role], (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении запроса: ' + err.message);
      res.status(500).json({ error: 'Ошибка при выполнении запроса' });
    } else {
      console.log('Данные успешно добавлены в базу данных');
      res.status(200).json({ message: 'Данные успешно добавлены в базу данных' });
    }
  });
});


// Роут для авторизации
app.post('/api/auth', (req, res) => {
  const { id, login, password} = req.body;

  var salt = bcrypt.genSaltSync(10);
  var passwordHash = bcrypt.hashSync(password, salt)

  const sql = 'SELECT id, login, password FROM users WHERE login = ?';


  db.query(sql, [id, login, password], (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении запроса: ' + err.message);
      res.status(500).json({ error: 'Ошибка при выполнении запроса' });
    } else if (ressults.length === 0)
    {
      res.status(401).json({ error: 'Неверный логин или пароль' });
    }
    else
    {
      var user = results[0];

  bcrypt.compare(password, user.password, (bcryptErr, bcryptResult) => {
      if (bcryptErr) {
        console.error('Ошибка при сравнении паролей: ' + bcryptErr.message);
        res.status(500).json({ error: 'Ошибка при сравнении паролей' });
      } else {
        if (bcryptResult) {
          // Пароли совпали, аутентификация успешна
          res.status(200).json({ message: 'Успешная аутентификация' });
        } else {
          // Пароли не совпали
          res.status(401).json({ error: 'Неверный логин или пароль' });
        }
      }
  });

      console.log('ВХОД');
      res.status(200).json({ message: 'ВХОД' });
    }
  });
});

const PORT = process.env.PORT || 7137;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});