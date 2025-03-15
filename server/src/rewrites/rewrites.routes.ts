import { Router } from "@root/async-router";
import { rewriteEventPage } from "./rewrites.events";

const router = Router();

router.get("/essr/:slug", rewriteEventPage);

export default router;
