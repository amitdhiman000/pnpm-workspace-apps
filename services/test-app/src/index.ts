import express from "express";
import { MathUtils } from "@kt/math-utils";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>It worked</h1>");
});

app.get("/lerp/:a/:b/:t", express.json(), (req, res) => {
    const {a, b, t} = req.params;
    console.log(a, b, t);
    const val = MathUtils.lerp(a, b, t);
    res.send(`Result: ${val}`);
});

app.listen(port, () => {
  console.log(`Test app listening on port ${port}`)
});