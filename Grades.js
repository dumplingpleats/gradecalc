// const mongoose = require('mongoose');
// const express = require('express');
// const router = express.Router();

// // Grade schema and model
// const gradeSchema = new mongoose.Schema({
//   course: String,
//   grade: String,
//   credits: Number
// });
// const Grade = mongoose.model('Grade', gradeSchema);

// // Add a new grade
// router.post('/', async (req, res) => {
//   const { course, grade, credits } = req.body;
//   const newGrade = new Grade({ course, grade, credits });
//   await newGrade.save();
//   res.redirect('/');
// });

// // Get all grades
// router.get('/', async (req, res) => {
//   const grades = await Grade.find({});
//   res.json(grades);
// });

// module.exports = router;


