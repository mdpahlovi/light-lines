import { Blog } from "@/models/blog";
import db from "@/utilities/db";

const handler = async (req, res) => {
    await db.connect();
    const { method } = req;
    switch (method) {
        case "GET":
            const blog = await Blog.find({});
            res.send(blog);
            break;
        default:
            res.status(400).send({ message: "Method not allowed" });
            break;
    }
};
export default handler;
