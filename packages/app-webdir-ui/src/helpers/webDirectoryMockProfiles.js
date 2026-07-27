// @ts-check
/**
 * Mock profile "seed" data used to build fake Web Directory API responses for
 * Storybook (via msw). The real `webdir-profiles/*` endpoints block requests
 * coming from localhost, so these fixtures let the Web Directory stories keep
 * working without hitting the live API.
 */

/**
 * @typedef {Object} MockProfileSeed
 * @property {string} asuriteId
 * @property {string} eid
 * @property {string} deptId
 * @property {string} displayName
 * @property {string} firstName
 * @property {string} lastName
 * @property {string[]} titles
 * @property {string} deptName
 * @property {string} email
 * @property {string} phone
 * @property {"1"|"2"|"3"|null} [rankGroup] - Matches `FacultyRankComponent`'s
 *   `rank_group` filter (1=Faculty, 2=Academic Professionals, 3=Other), or
 *   `null`/omitted for profiles outside those groups.
 */

/** @type {MockProfileSeed[]} */
const mockProfileSeeds = [
  {
    asuriteId: "mcrow",
    eid: "454517",
    deptId: "1350",
    displayName: "Michael Crow",
    firstName: "Michael",
    lastName: "Crow",
    titles: ["President"],
    deptName: "Office of the President",
    email: "michael.crow@asu.edu",
    phone: "480/965-1234",
    // Not a Faculty/Academic Professional rank group; excluded from Faculty Rank tabs.
    rankGroup: null,
  },
  {
    asuriteId: "mdenke",
    eid: "1350001",
    deptId: "1350",
    displayName: "Morgan Denke",
    firstName: "Morgan",
    lastName: "Denke",
    titles: ["Associate Professor"],
    deptName: "School of Life Sciences",
    email: "morgan.denke@asu.edu",
    phone: "480/965-2345",
    rankGroup: "1", // Faculty
  },
  {
    asuriteId: "jagarc50",
    eid: "1350002",
    deptId: "1350",
    displayName: "Javier Garcia",
    firstName: "Javier",
    lastName: "Garcia",
    titles: ["Lecturer"],
    deptName: "School of Life Sciences",
    email: "javier.garcia@asu.edu",
    phone: "480/965-3456",
    rankGroup: "1", // Faculty
  },
  {
    asuriteId: "lhillzev",
    eid: "1353001",
    deptId: "1353",
    displayName: "Lena Hillzev",
    firstName: "Lena",
    lastName: "Hillzev",
    titles: ["Administrative Assistant"],
    deptName: "College of Health Solutions",
    email: "lena.hillzev@asu.edu",
    phone: "480/965-4567",
    rankGroup: "3", // Other Faculty and Academic Professionals
  },
  {
    asuriteId: "tgrandli",
    eid: "1344001",
    deptId: "1344",
    displayName: "Taylor Grandli",
    firstName: "Taylor",
    lastName: "Grandli",
    titles: ["Academic Advisor"],
    deptName: "W. P. Carey School of Business",
    email: "taylor.grandli@asu.edu",
    phone: "480/965-5678",
    rankGroup: "2", // Academic Professionals
  },
  {
    asuriteId: "jcunnin8",
    eid: "1358001",
    deptId: "1358",
    displayName: "Jordan Cunningham",
    firstName: "Jordan",
    lastName: "Cunningham",
    titles: ["Professor"],
    deptName: "Ira A. Fulton Schools of Engineering",
    email: "jordan.cunningham@asu.edu",
    phone: "480/965-6789",
    rankGroup: "1", // Faculty
  },
  {
    asuriteId: "ccherrer",
    eid: "1358002",
    deptId: "1358",
    displayName: "Casey Cherrer",
    firstName: "Casey",
    lastName: "Cherrer",
    titles: ["Assistant Professor"],
    deptName: "Ira A. Fulton Schools of Engineering",
    email: "casey.cherrer@asu.edu",
    phone: "480/965-7890",
    rankGroup: "1", // Faculty
  },
  {
    asuriteId: "csmudde",
    eid: "1358003",
    deptId: "1358",
    displayName: "Charlie Smudde",
    firstName: "Charlie",
    lastName: "Smudde",
    titles: ["Research Scientist"],
    deptName: "Ira A. Fulton Schools of Engineering",
    email: "charlie.smudde@asu.edu",
    phone: "480/965-8901",
    rankGroup: "2", // Academic Professionals
  },
  {
    asuriteId: "abarnett",
    eid: "1349001",
    deptId: "1349",
    displayName: "Alex Barnett",
    firstName: "Alex",
    lastName: "Barnett",
    titles: ["Faculty"],
    deptName: "College of Global Futures",
    email: "alex.barnett@asu.edu",
    phone: "480/965-9012",
    rankGroup: "3", // Other Faculty and Academic Professionals
  },
  {
    asuriteId: "rjmoreno",
    eid: "1518001",
    deptId: "1518",
    displayName: "Riley Moreno",
    firstName: "Riley",
    lastName: "Moreno",
    titles: ["Staff"],
    deptName: "Herberger Institute for Design and the Arts",
    email: "riley.moreno@asu.edu",
    phone: "480/965-0123",
    rankGroup: null,
  },
  {
    asuriteId: "spatel12",
    eid: "1520001",
    deptId: "1520",
    displayName: "Sam Patel",
    firstName: "Sam",
    lastName: "Patel",
    titles: ["Professor"],
    deptName: "Watts College of Public Service and Community Solutions",
    email: "sam.patel@asu.edu",
    phone: "480/965-1122",
    rankGroup: "1", // Faculty
  },
  {
    asuriteId: "ekowalsk",
    eid: "3534001",
    deptId: "3534",
    displayName: "Emerson Kowalski",
    firstName: "Emerson",
    lastName: "Kowalski",
    titles: ["Associate Dean"],
    deptName: "Mary Lou Fulton Teachers College",
    email: "emerson.kowalski@asu.edu",
    phone: "480/965-2233",
    rankGroup: "2", // Academic Professionals
  },
];

/**
 * Builds a Web Directory search-API-shaped raw record from a mock profile seed.
 * @param {MockProfileSeed} seed
 * @param {number} index
 * @returns {Record<string, any>}
 */
function toRawProfile(seed, index) {
  return {
    id: { raw: `mock-${seed.asuriteId}` },
    asurite_id: { raw: seed.asuriteId },
    eid: { raw: seed.eid },
    deptids: { raw: [seed.deptId] },
    display_name: { raw: seed.displayName },
    first_name: { raw: seed.firstName },
    last_name: { raw: seed.lastName },
    titles: { raw: seed.titles },
    departments: { raw: [seed.deptName] },
    email_address: { raw: seed.email },
    phone: { raw: seed.phone },
    rank_group: { raw: seed.rankGroup ?? null },
    campus_address: { raw: "ASU Tempe Campus" },
    city: { raw: "Tempe" },
    state: { raw: "AZ" },
    photo_url: {
      raw: `https://source.unsplash.com/random/400x400?sig=${index}`,
    },
    bio: { raw: `${seed.displayName} is a member of ${seed.deptName}.` },
    short_bio: { raw: `${seed.titles[0]} in ${seed.deptName}` },
    facebook: { raw: null },
    linkedin: { raw: null },
    twitter: { raw: null },
    website: { raw: "" },
    _meta: {
      engine: "web-dir-faculty-staff",
      score: 5,
      id: `mock-${seed.asuriteId}`,
    },
  };
}

export const mockDirectoryProfiles = mockProfileSeeds.map(toRawProfile);

/**
 * Looks up (or falls back to generating) a mock raw profile for the given
 * asurite ID, so POST payloads referencing arbitrary IDs still resolve.
 * @param {string} asuriteId
 * @param {number} index
 * @returns {Record<string, any>}
 */
export function getMockProfileByAsuriteId(asuriteId, index = 0) {
  const found = mockProfileSeeds.find(seed => seed.asuriteId === asuriteId);
  if (found) {
    return toRawProfile(found, index);
  }
  return toRawProfile(
    {
      asuriteId,
      eid: "0",
      deptId: "1350",
      displayName: asuriteId,
      firstName: asuriteId,
      lastName: "",
      titles: ["Staff"],
      deptName: "Arizona State University",
      email: `${asuriteId}@asu.edu`,
      phone: "480/965-0000",
    },
    index
  );
}
