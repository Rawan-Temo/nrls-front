const topicTyps = ["studies", "analytics", "opinion_article", "files"];
const mediaTyps = ["infographic", "video", "documentary", "report"];
const publicationTyps = ["magazine", "book"];

const allTyps = [
  ...topicTyps,
  ...mediaTyps,
  "event",
  "survey",
  ...publicationTyps,
];

const eventType = ["dialogue_session", "forum", "meeting", "center_news"];

const mediaFileType = ["image", "video", "pdf", "audio"];

export {
  eventType,
  mediaFileType,
  allTyps,
  topicTyps,
  mediaTyps,
  publicationTyps,
};
