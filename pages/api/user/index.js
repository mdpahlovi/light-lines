import { User } from "@/models/user";
import db from "@/utilities/db";

const handler = async (req, res) => {
    await db.connect();
    const { method } = req;
    switch (method) {
        case "GET":
            const user = await User.find({});
            res.send(user);
            break;
        case "POST":
            const alreadyExist = await User.findOne({ email: req.body.email });
            if (alreadyExist?._id) {
                res.send(alreadyExist);
            } else {
                const newUser = new User(req.body);
                const result = await newUser.save();
                res.send(result);
            }
            break;
        default:
            res.status(400).send({ message: "Method not allowed" });
            break;
    }
};
export default handler;
