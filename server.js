const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`
            CREATE TABLE IF NOT EXISTS bookings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                total_guests INTEGER,
                date TEXT,
                time_of_day TEXT,
                hours INTEGER,
                fullname TEXT,
                email TEXT,
                message TEXT
            )
        `);
    }
});

// Register a new user
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.run(query, [name, email, password], function(err) {
        if (err) {
            console.error('Error registering user:', err.message);
            return res.status(500).send('Failed to register user.');
        }
        console.log(`User ${name} registered with ID ${this.lastID}`);
        res.status(201).send('User registered successfully.');
    });
});

// Login user
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    db.get(query, [email], async (err, row) => {
        if (err) {
            console.error('Error querying user:', err.message);
            return res.status(500).send('Failed to query user.');
        }

        if (!row) {
            return res.status(404).send('User not found.');
        }

        // const isValidPassword = await compare(password, row.password);
        // if (!isValidPassword) {
        //     return res.status(401).send('Invalid password.');
        // }

        res.status(200).json({ id: row.id, name: row.name, email: row.email });

        // if login is successful, return user data

    });
});

// Handle booking form submission
app.post('/submit-booking', (req, res) => {
    const { bf_totalGuests, bf_date, bf_time, bf_hours, bf_fullname, bf_email, bf_message } = req.body;

    const query = `
        INSERT INTO bookings (total_guests, date, time_of_day, hours, fullname, email, message)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    db.run(query, [bf_totalGuests, bf_date, bf_time, bf_hours, bf_fullname, bf_email, bf_message], function(err) {
        if (err) {
            console.error('Error submitting booking:', err.message);
            return res.status(500).send('Failed to submit booking.');
        }
        console.log(`Booking submitted with ID ${this.lastID}`);
        res.status(201).send('Booking submitted successfully.');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
