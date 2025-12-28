import ratelimit  from "../config/upstash.js";

const rateLimiter = async(req,res,next) => {
    try {
        //here we just kept it simple
        //in areal world app you do like to put the user id or ip address is your key
        const { success } = await ratelimit.limit("my-rate-limit");

        if (!success) {
            return res.status(429).json({
                message: "Too many requests. Please try again later.",

            });
        }

        next();
    } catch (error) {
        console.log("Rate limit error", error);
        next(error);
    }
};

export default rateLimiter;



