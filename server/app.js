const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const contactRoutes = require('./routes/contactRoutes');
const WorkRecordRoutes = require('./routes/dailyWorkRecordRoutes');
const InjuryRoutes = require('./routes/reportInjury');
const SafetyRoutes = require('./routes/safetyComplaint');
require('dotenv').config();


app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/contact', contactRoutes);
app.use('/api/dailyworkrecord', WorkRecordRoutes);
app.use('/api/safety-complaint', SafetyRoutes);
app.use('/api/report-injury', InjuryRoutes);

app.get('/', async (req, res) => {
    res.send("Welcome to Metro Vancouver Spray Foam");
})


app.listen(process.env.PORT || 5000, function() {
    console.log(`Server started on port ${process.env.PORT || 5000}`);
});
