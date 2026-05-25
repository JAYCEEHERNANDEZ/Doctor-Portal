import { verifyToken }
from "../services/authService.js";

const authMiddleware = async (
    req,
    res,
    next
) => {

    try {

        console.log("MIDDLEWARE HIT");

        const authHeader =
            req.headers.authorization;

        console.log("AUTH HEADER:", authHeader);

        if (!authHeader) {

            return res.status(401).json({
                message:
                    "No token provided"
            });

        }

        const token =
            authHeader.split(" ")[1];

        console.log("TOKEN:", token);

        const user =
            await verifyToken(token);

        console.log("USER:", user);

        req.user = user.user;

        req.token = token;

        next();

    } catch (err) {

        console.log("AUTH ERROR:", err);

        return res.status(401).json({
            message: "Unauthorized"
        });

    }

};

export default authMiddleware;