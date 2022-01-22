const mongoose = require('../connection');
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
  date: String,
  time: String,
  company: String,
  interviewer: String,
  interviewerEmail: String,
  jobTitle: String,
  salary: Number,
  secondInterview: Boolean,
  remote: Boolean,
});

const Application = mongoose.model('Applications', ApplicationSchema);

module.exports = Application;
