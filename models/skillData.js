const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
	name: String,
	status: Number
});

mongoose.model('skills',skillSchema);