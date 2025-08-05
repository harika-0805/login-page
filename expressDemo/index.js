//const fs = require('fs');
//const app = require('express')();

//app.listen(3000, () => {
  //console.log('Server is running on port 3000');
  //console.log('You can access the app at http://localhost:3000');
//});
//app.get('/', (req, res) => {
  //  fs.readFile('posts.json', (err, data) => {
    //    if (err) {
      //      res.status(500).send('Error reading posts');
        //    return;
        //}
        //res.setReader('Content-Type', 'application/json');
        /*res.send(data); 
    });
});*/
const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
app.use(express.json()); // To parse JSON body

const PORT = 3001;

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'n3u3da!',
    database: 'pubs'
});

db.connect(err => {
    if (err) {
        console.error('DB connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL');
});

// Route to fetch data
app.get('/pubs/stores', (req, res) => {
    db.query('SELECT * FROM stores', (err, results) => {
        if (err) {
            return res.status(500).send('Database query failed');
        }
        res.json(results);
    });
});

// Start the server
app.listen(3001, () => {
    console.log(`Server is running at http://localhost:${3001}`);
});

        
app.post('/pubs/stores', (req, res) => {
    const { stor_id, stor_name, stor_address, city, state, zip } = req.body;

    const query = 'INSERT INTO stores (stor_id, stor_name, stor_address, city, state, zip) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [stor_id, stor_name, stor_address, city, state, zip];

    console.log('Inserting values:', values);

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Insert failed:', err);
            return res.status(500).send('Failed to insert data');
        }
        res.status(201).send(`Store added with ID: ${stor_id}`);
    });
});


app.get('/pubs/stores/view', (req, res) => {
    db.query('SELECT * FROM stores', (err, results) => {
        if (err) {
            console.error('🔴 Failed to fetch data:', err);
            return res.status(500).send('Failed to fetch data');
        }

        // Generate a simple HTML table
        let html = `<h2>📚 Store List</h2>`;
        html += `<table border="1" cellpadding="5" cellspacing="0">
                    <tr>
                        <th>stor_id</th>
                        <th>stor_name</th>
                        <th>stor_address</th>
                        <th>city</th>
                        <th>state</th>
                        <th>zip</th>
                    </tr>`;

        results.forEach(row => {
            html += `<tr>
                        <td>${row.stor_id}</td>
                        <td>${row.stor_name}</td>
                        <td>${row.stor_address}</td>
                        <td>${row.city}</td>
                        <td>${row.state}</td>
                        <td>${row.zip}</td>
                    </tr>`;
        });

        html += `</table>`;
        res.send(html);
    });
});
