import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/submit', async (req, res) => {
    try {
        const { name, email, phone, designation, country } = req.body;
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root', 
            database: 'candidateform' 
        });

        const query = `INSERT INTO candidate_leads (fullName, email, phoneNumber, designation, country) 
                       VALUES (?, ?, ?, ?, ?)`;
        
        await connection.execute(query, [name, email, phone, designation, country]);
        await connection.end();

        res.status(200).json({ status: 'success' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: error.message });
    }
});
app.post('/api/contact-submit', async (req, res) => {
    try {
        // We pull the data from the request body
        const { name, email, phone, message } = req.body;

        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'contactus' // Database 2
        });

        // Mapping to your specific column names: fname, email, PhoneNumber, Message
        // Note: created_at is usually handled automatically by MySQL if set to DEFAULT CURRENT_TIMESTAMP
        const query = `INSERT INTO contact_us (fname, email, PhoneNumber, Message) 
                       VALUES (?, ?, ?, ?)`;
        
        await connection.execute(query, [
            name || null, 
            email || null, 
            phone || null, 
            message || null
        ]);

        await connection.end();
        res.status(200).json({ status: 'success' });
    } catch (error) {
        console.error("Contact Us Error:", error);
        res.status(500).json({ status: 'error', message: error.message });
    }
});

app.listen(5000, () => console.log('✅ Backend Server running on http://localhost:5000'));