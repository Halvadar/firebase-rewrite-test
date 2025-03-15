// import { getEventBy } from "../db.queries";
import { AppError } from "../middlewares/error-handler";
import { initMetaHelper } from "./rewrites.helpers";
import { getEventMetaBySlug } from "../data/events";

// https://github.com/firebase/firebase-tools/issues/33#issuecomment-340655544
export const rewriteEventPage = async (req, res, next) => {
  try {
    const eventSlug = req.params.slug;

    // Get event meta information from our data
    const eventMeta = getEventMetaBySlug(eventSlug);

    if (!eventMeta) throw new AppError.EventNotFound();

    const metaHelper = await initMetaHelper();

    // Use the event meta information to set the page metadata
    metaHelper.addTitle(eventMeta.title);
    metaHelper.addMetaDescription(eventMeta.description);
    metaHelper.addLink(`https://koalendar.com/ssr/e/${eventSlug}`);
    metaHelper.addOgSiteName(eventMeta.metaTitle);

    res.status(200).send(metaHelper.getHtml());
  } catch (err) {
    next(err);
  }
};
