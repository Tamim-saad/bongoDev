const express = require('express');
const router = express.Router();
const User = require('../../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../../middleware/auth')

//? Create a new user
router.post('/', async (req, res) => {
  try {
    // 🔐 Password Security Steps:
    // 1. Make random 'salt' to mix with password (like special seasoning)
    const salt = await bcrypt.genSalt(10); // 10 = security strength

    // 2. Hash password = password + salt → scrambled text
    const password = await bcrypt.hash(req.body.password, salt);

    // 📦 Prepare user data package
    const userObj = {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      password: password, // Store HASHED password, never raw password!
    }


    // 💾 Save to database
    const user = await User(userObj) // Create new user document
    await user.save(); // Actually save to database

    // ⚠️ SECURITY WARNING: We're sending back hashed password!
    // Should remove password before sending response
    return res.status(201).json(user) // 201 = Created success status

  } catch (err) {
    // 🚨 Handle errors (like duplicate email or database issues)
    res.status(500).json({ message: "Something wrong " }); // 500 = Server error
  }
});

//? Login
router.post('/login', async (req, res) => {
  try {
    const { type, email, password, refreshToken } = req.body;

    // Currently only handling email/password login
    if (type === 'email') {
      // 🔍 Find user by email (like looking up in phonebook)
      const user = await User.findOne({ email: email });

      if (!user) {
        return res.status(404).json({ message: "user not found" }); // 404 = Not found
      }
      else {
        // 🔑 Verify password & handle login
        await handleEmailLogin(password, user, res)
      }
    }
    else {
      if (!refreshToken) {
        return res.status(404).json({ message: "Refresh token not found" });
      }
      else {
        await handleRefreshToken(refreshToken, res);
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Something wrong " });
  }
});


// Route to get the user's profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    // Step 1: Get the user's ID from the authenticated request
    const id = req.user._id;

    // Step 2: Find the user in the database using their ID
    const user = await User.findById(id);

    // Step 3: If the user exists, return their profile
    if (user) {
      return res.json(user);
    }
    // Step 4: If the user doesn't exist, return a 404 error
    else {
      return res.status(404).json("user not found");
    }
  }
  // Step 5: Handle any unexpected errors
  catch {
    res.status(500).json({ message: "Something went wrong" });
  }
});


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

// 🔑 Helper function for email/password login
async function handleEmailLogin(password, user, res) {
  // 🔐 Compare user input with stored hash
  const isValidPassword = await bcrypt.compare(password, user.password)

  if (isValidPassword) {
    // ✅ Correct password: Create token package
    const userObj = await generateUserObj(user)
    return res.json(userObj);
  }
  else {
    // ❌ Wrong password: Unauthorized access
    return res.status(401).json({ message: "login failed" }); // 401 = Unauthorized
  }
}

// 🎟️ Token Creation Helpers
function generateUserObj(user) {
  // Create access/refresh tokens (like special event tickets)
  const { accessToken, refreshToken } = generateToken(user);

  // Convert MongoDB user document to plain object
  const userObj = user.toJSON()

  // Add tokens to user object
  userObj['accessToken'] = accessToken // Short-lived token (1 day)
  userObj['refreshToken'] = refreshToken // Long-lived token (20 days)

  return userObj;
}


// 🔏 Token Generation (JWT)
function generateToken(user) {
  // Access Token (daily use)
  const accessToken = jwt.sign(
    { email: user.email, _id: user.id }, // Payload (user info)
    process.env.JWT_SECRET, // Secret key (like password for tokens)
    { expiresIn: '1d' } // Expires in 1 day
  );


  // Refresh Token (for getting new access tokens)
  const refreshToken = jwt.sign(
    { email: user.email, _id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: '20d' } // Expires in 20 days
  );

  return { accessToken, refreshToken };
}


function handleRefreshToken(refreshToken, res) {
  jwt.verify(refreshToken, process.env.JWT_SECRET, async (err, payload) => {
    if (err) {
      return res.status(401).json({ message: "UnauthorizedError" })
    }
    else {
      const user = await User.findById(payload._id);
      if (user) {
        const userObj = generateUserObj(user);
        return res.status(200).json(userObj);
      } else {
        return res.status(401).json({ message: "UnauthorizedError" })
      }
    }
  })
}