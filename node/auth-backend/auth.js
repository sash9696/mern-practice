const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    //GET THE TOKEN FROM AUTHORIZATION HEADER
    const token = await req.headers.authorization.split(" ")[1];
    //check if the token matches the origin

    const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");

    //retireve the user detauls of logged in user

    const user = await decodedToken;

    //pass the user details doen to the subsequent endpoints

    req.user = user;

    //pass down functionality to the endpoints
    next();
  } catch (error) {
    res.status(401).json({
        error: new Error('Invalid Request')
    })
  }
};
