import express from "express";
import { rewriteEventPage } from "./rewrites/rewrites.events";
import { Router } from "@root/async-router";

const app = express();
const router = Router();

router.get("/e/:slug", rewriteEventPage);
router.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Hello world listening on port", port);
});
