// Backend: Express.js + MySQL

const express = require('express');
const mysql = require('mysql');
const axios = require('axios');
const app = express();
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'stock'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Fetch stock data from API
app.get('/api/stock/:symbol', async (req, res) => {
  const symbol = req.params.symbol;
  try {
    const response = await axios.get(`https://www.alphavantage.co/query`, {
      params: {
        function: 'GLOBAL_QUOTE',
        symbol: symbol,
        apikey: 'YOUR_API_KEY'
      }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).send('API fetch error');
  }
});

// Buy/Sell Stock
app.post('/api/transaction', (req, res) => {
  const { Uid, Sid, TransactionType, Quantity, Price } = req.body;
  const query = `INSERT INTO transactions (Uid, Sid, TransactionType, Quantity, Price) VALUES (?, ?, ?, ?, ?)`;
  db.query(query, [Uid, Sid, TransactionType, Quantity, Price], (err, result) => {
    if (err) return res.status(500).send('Database insert error');
    res.send('Transaction recorded');
  });
});

// Get Portfolio
app.get('/api/portfolio/:uid', (req, res) => {
  const uid = req.params.uid;
  const query = `SELECT Sid, SUM(CASE WHEN TransactionType='Buy' THEN Quantity ELSE -Quantity END) AS total_shares FROM transactions WHERE Uid = ? GROUP BY Sid HAVING total_shares > 0`;
  db.query(query, [uid], (err, results) => {
    if (err) return res.status(500).send('Error fetching portfolio');
    res.json(results);
  });
});

// Add to Watchlist
app.post('/api/watchlist', (req, res) => {
  const { Uid, Sid } = req.body;
  const query = `INSERT INTO watchlist (Uid, Sid) VALUES (?, ?)`;
  db.query(query, [Uid, Sid], (err, result) => {
    if (err) return res.status(500).send('Watchlist error');
    res.send('Added to watchlist');
  });
});

// Get Watchlist
app.get('/api/watchlist/:uid', (req, res) => {
  const uid = req.params.uid;
  const query = `SELECT Sid FROM watchlist WHERE Uid = ?`;
  db.query(query, [uid], (err, results) => {
    if (err) return res.status(500).send('Error fetching watchlist');
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
