import { Blog } from "@/models/blog";
import db from "@/utilities/db";

const handler = async (req, res) => {
    await db.connect();
    const { method } = req;
    const id = req.query.id;
    switch (method) {
        case "GET":
            const blog = await Blog.findById(id);
            res.send(blog);
            break;
        default:
            res.status(400).send({ message: "Method not allowed" });
            break;
    }
};
export default handler;
