// Import the jsonwebtoken library to work with JWTs (JSON Web Tokens)
const jwt = require('jsonwebtoken');

// Export a middleware function that will be used to authenticate requests
module.exports = function (req, res, next) {
  // Step 1: Check if the request has an Authorization header
  const authHeader = req.headers.authorization;

  // If there's no Authorization header, block the request
  if (!authHeader) {
    // Send a 401 Unauthorized response with an error message
    res.status(401).json({ message: 'Invalid authorization' });
  }
  // If the Authorization header exists, proceed to extract the token
  else {
    // Step 2: Extract the token from the Authorization header
    // The header usually looks like: "Bearer <token>"
    // Split the header by spaces and take the second part (the actual token)
    const token = authHeader && authHeader.split(' ')[1];

    // Step 3: Check if the token exists
    if (token) {
      // Step 4: Verify the token using the JWT_SECRET
      // jwt.verify() checks if the token is valid and not tampered with
      jwt.verify(token, process.env.JWT_SECRET, (err, payLoad) => {
        // If there's an error (e.g., token is expired or invalid), block the request
        if (err) {
          // Send a 401 Unauthorized response with an error message
          res.status(401).json({ message: 'Invalid authorization' });
        }
        // If the token is valid, proceed to the next step
        else {
          // Step 5: Attach the payload (user data) to the request object
          // The payload contains the user's information (e.g., userId, email)
          req.user = payLoad;

          // Step 6: Call next() to pass control to the next middleware or route handler
          next();
        }
      });
    }
    // If the token doesn't exist, block the request
    else {
      // Send a 401 Unauthorized response with an error message
      res.status(401).json({ message: 'Invalid authorization' });
    }
  }
};