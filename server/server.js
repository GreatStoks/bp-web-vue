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
  password: '7137', // Замените на пароль базы данных
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
app.post('/api/register', async(req, res) => {
  var { id, login, email, password, role } = req.body;

  //var salt = bcrypt.genSaltSync(10);
  var salt = '$Vers$log2(5)$1]';

  var passwordHash = await bcrypt.hash(password, salt);
  console.log(passwordHash);
  // Вставляем данные в таблицу пользователей (замените 'users' на имя вашей таблицы)
  var sql = 'INSERT INTO users (id, login, email, password, role) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [id, login, email, passwordHash, role], (err, results) => {
    if (err) {
      console.error('Ошибка при выполнении запроса: ' + err.message);
      res.status(500).json({ error: 'Ошибка при выполнении запроса' });
    } else {
      res.status(200).json({ message: 'Добавлено' });
    }
  });
});


// Роут для авторизации
app.post('/api/auth',async(req, res) => {
  var { login, password} = req.body;
  var id;
  //var salt = bcrypt.genSaltSync(10);
  var salt = '$Vers$log2(5)$1]';

  var passwordHash = await bcrypt.hash(password, salt);
  console.log(bcrypt.compare(password, passwordHash));
  var sql = 'SELECT id, login, password FROM users WHERE login = ?';


  db.query(sql, [id, login, password], (err, results) => {
    if (err) {
      console.error('Ошибка при выполнении запроса: ' + err.message);
      res.status(500).json({ error: 'Ошибка при выполнении запроса' });
    } else if (results.length === 0)
    {
      res.status(401).json({ error: 'Неверный логин или пароль' });
    }
    else
    {

  bcrypt.compare(password, passwordHash, (bcryptErr, bcryptResult) => {
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
    }
  });
});


// Добавление поста в таблицу
app.post('/api/createPost', async(req, res) => {
  var { imgurl, date, place, info } = req.body;


  // Вставляем данные в таблицу пользователей (замените 'users' на имя вашей таблицы)
  var sql = 'INSERT INTO posts_table (imgurl, date, place, info) VALUES (?, ?, ?, ?)';
  db.query(sql, [imgurl, date, place, info], (err, results) => {
    if (err) {
      console.error('Ошибка при выполнении запроса: ' + err.message);
      res.status(500).json({ error: 'Ошибка при выполнении запроса' });
    } else {
      console.log('Данные успешно добавлены в базу данных');
      res.status(200).json({ message: 'Данные о посте успешно добавлены в базу данных' });
    }
  });
});

app.post('/api/getPost', async(req, res) => {
  var { id, imgurl, date, place, info } = req.body;


  // Вставляем данные в таблицу пользователей (замените 'users' на имя вашей таблицы)
  var sql = 'SELECT id, imgurl, date, place, info FROM posts_table';
  db.query(sql, [id, imgurl, date, place, info], (err, results) => {
    if (err) {
      console.error('Ошибка при выполнении запроса: ' + err.message);
      res.status(500).json({ error: 'Ошибка при выполнении запроса' });
    } else {
      console.log('Посты получены');
      res.status(200).json(results);
    }
  });
});

const PORT = process.env.PORT || 7137;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});