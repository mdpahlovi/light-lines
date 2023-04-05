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
        case "PATCH":
            await Blog.findByIdAndUpdate(id, { $set: req.body });
            res.send({ acknowledge: true, updatedId: id });
            break;
        case "DELETE":
            await Blog.findByIdAndRemove(id);
            res.send({ acknowledge: true, removedId: id });
            break;
        default:
            res.status(400).send({ message: "Method not allowed" });
            break;
    }
};
export default handler;
