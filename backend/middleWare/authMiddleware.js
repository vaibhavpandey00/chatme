const jwt = require("jsonwebtoken");
const User = require("../Modules/userModel");
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        // Token will look like (Bearer awfsajhqd4aw7a!dwqd@)
        try {
            // so we will split the token and take the token part
            token = req.headers.authorization.split(" ")[1];

            // decode token ID
            const decode = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decode.id).select("-password");

            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
})

module.exports = { protect };