const express = require('express');
const router = express.Router();
const User = require('../../models/User')

//? Create a new user
router.post('/', async (req, res) => {
  try {
    const userObj = {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
    }
    const user = await User(userObj)
    await user.save();
    return res.status(201).json(user)
  }
  catch (err) {
    res.status(500).json({ message: "Something wrong " });
  }
})


//? Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find({})
    return res.status(200).json(users)
  }
  catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
})

//?Get one user
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const user = await User.findById(id)
    if (user) {
      return res.json(user)
    }
    else {
      return res.status(404).json("user not found")
    }
  }
  catch {
    res.status(500).json({ message: "Something went wrong" });
  }
})

//? Update 1 user
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const userBody = req.body
    const updatedUser = await User.findByIdAndUpdate(id, userBody, { new: true })
    // only fname update korte chaile (id, fname, {new: true})
    // update kore old value e dekhate chaile (id, fname)

    if (updatedUser) {
      return res.json(updatedUser)
    }
    else {
      return res.status(404).json("user not found")
    }
  }
  catch {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
})


//? Delete a user
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id)
    if (deletedUser) {
      return res.json({ "following user deleted": deletedUser })
    }
    else {
      return res.status(404).json("user not found")
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
});

module.exports = router