require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

//? Parse Request
app.use(bodyParser.json());

connectDB()

//? routes
app.use('/api/users', require('./routes/api/users'));


// ? check connection
app.get('/', (req, res) => {
  res.json({ message: 'welcome' }
  )
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// let users = []
// let lastid = 0
// app.post('/users', (req, res) => {
//   const user = req.body
//   user.id = ++lastid;
//   users.push(user)
//   res.status(201).json(user)
// })

// app.get('/users', (req, res) => {
//   res.json(users)
// });

// app.get('/users/:id', (req, res) => {
//   const id = parseInt(req.params.id)
//   const user = users.find((u) => u.id === id)
//   if (user) {
//     res.json(user)
//   }
//   else {
//     res.status(404).json("user not found")
//   }
// });

// app.put('/users/:id', (req, res) => {
//   const id = parseInt(req.params.id)
//   const updateUser = req.body
//   const userIndex = users.findIndex((u) => u.id === id)
//   if (userIndex == -1) {
//     res.status(404).json("user not found")
//   }
//   else {
//     users[userIndex] = { ...users[userIndex], ...updateUser }
//     res.json(users[userIndex])
//   }
// });


// app.delete('/users/:id', (req, res) => {
//   const id = parseInt(req.params.id)
//   const userIndex = users.findIndex(u => u.id === id)
//   if (userIndex == -1) {
//     res.status(404).json("user not found")
//   }
//   else {
//     users.splice(userIndex, 1)
//     res.json({ message: "user is deleted" })
//   }
// });
