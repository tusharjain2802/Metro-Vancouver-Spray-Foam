const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const contactRoutes = require('./routes/contactRoutes');
const WorkRecordRoutes = require('./routes/dailyWorkRecordRoutes');
const InjuryRoutes = require('./routes/reportInjury');
const SafetyRoutes = require('./routes/safetyComplaint');

require('dotenv').config();

// Use the CORS middleware
const allowedOrigins = [
    'http://localhost:5173',
    'https://www.metrovancouversprayfoam.com',
    'https://metrovancouversprayfoam.com',
];

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true,
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
}));

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/api/contact', contactRoutes);
app.use('/api/dailyworkrecord', WorkRecordRoutes);
app.use('/api/safety-complaint', SafetyRoutes);
app.use('/api/report-injury', InjuryRoutes);

app.get('/', async (req, res) => {
    res.send('Welcome to Metro Vancouver Spray Foam');
});

app.listen(process.env.PORT || 5000, function () {
    console.log(`Server started on port ${process.env.PORT || 5000}`);
});