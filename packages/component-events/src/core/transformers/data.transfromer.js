// @ts-check

/**
 *
 * @param {object} data
 */
const transformData = data => ({
  id: data.node.nid,
  title: data.node.title,
  imageUrl: data.node.image_url,
  location: (data.node.campus || "").trim(),
  interests: data.node.interests,
  startDate: data.node.very_start_date,
  endDate: data.node.very_end_date,
  alias: data.node.alias,
  audiences: data.node.audiences,
  eventUnits: data.node.event_units,
  eventTopics: data.node.event_topics,
  eventTypes: data.node.event_types,
  eventButtonUrl: data.node.ticketing_rsvp_url,
  eventButtonText: data.node.ticketing_rsvp_txt,
});
export { transformData };
