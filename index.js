const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('./models/skillData');

mongoose.connect('mongodb://localhost:27020/addSkill');

const app = express();
app.use(cors());
app.use(bodyParser.json({type:'*/*'}));
require("./routes/skills")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
