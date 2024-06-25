const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to the SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the SQLite database');
    }
});

// Endpoint to handle user signup
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.run(query, [name, email, password], function(err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(201).send('User created');
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
