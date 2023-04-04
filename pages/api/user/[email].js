import { User } from "@/models/user";
import db from "@/utilities/db";

const handler = async (req, res) => {
    await db.connect();
    const { email } = req.query;
    const { method } = req;
    switch (method) {
        case "GET":
            const user = await User.findOne({ email: email });
            res.send(user);
            break;
        default:
            res.status(400).send({ message: "Method not allowed" });
            break;
    }
};
export default handler;
