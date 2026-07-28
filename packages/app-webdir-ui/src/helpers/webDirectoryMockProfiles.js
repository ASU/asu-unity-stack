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
    asuriteId: "jwhitfi",
    eid: "454517",
    deptId: "1350",
    displayName: "Jordan Whitfield",
    firstName: "Jordan",
    lastName: "Whitfield",
    titles: ["President"],
    deptName: "Office of the President",
    email: "jordan.whitfield@asu.edu",
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
  // Additional fictional profiles so pagination, the "More" tab overflow,
  // and the "Filter by Last Initial" alpha filter all have enough volume
  // and last-name diversity to exercise the full experience in Storybook.
  {
    asuriteId: "pnakamu",
    eid: "1358010",
    deptId: "1358",
    displayName: "Priya Nakamura",
    firstName: "Priya",
    lastName: "Nakamura",
    titles: ["Clinical Professor"],
    deptName: "Ira A. Fulton Schools of Engineering",
    email: "priya.nakamura@asu.edu",
    phone: "480/965-3301",
    rankGroup: "1", // Faculty
  },
  {
    asuriteId: "mdelgad2",
    eid: "1344010",
    deptId: "1344",
    displayName: "Marcus Delgado",
    firstName: "Marcus",
    lastName: "Delgado",
    titles: ["Distinguished Professor"],
    deptName: "W. P. Carey School of Business",
    email: "marcus.delgado@asu.edu",
    phone: "480/965-3302",
    rankGroup: "1", // Faculty
  },
  {
    asuriteId: "dokafor",
    eid: "1353010",
    deptId: "1353",
    displayName: "Devon Okafor",
    firstName: "Devon",
    lastName: "Okafor",
    titles: ["Professor"],
    deptName: "College of Health Solutions",
    email: "devon.okafor@asu.edu",
    phone: "480/965-3303",
    rankGroup: "1", // Faculty
  },
  {
    asuriteId: "hlindqv",
    eid: "1350010",
    deptId: "1350",
    displayName: "Harper Lindqvist",
    firstName: "Harper",
    lastName: "Lindqvist",
    titles: ["Associate Professor"],
    deptName: "School of Life Sciences",
    email: "harper.lindqvist@asu.edu",
    phone: "480/965-3304",
    rankGroup: "1", // Faculty
  },
  {
    asuriteId: "raberna",
    eid: "1349010",
    deptId: "1349",
    displayName: "Reese Abernathy",
    firstName: "Reese",
    lastName: "Abernathy",
    titles: ["Lecturer"],
    deptName: "College of Global Futures",
    email: "reese.abernathy@asu.edu",
    phone: "480/965-3305",
    rankGroup: "1", // Faculty
  },
  {
    asuriteId: "qostrow",
    eid: "1358011",
    deptId: "1358",
    displayName: "Quinn Ostrowski",
    firstName: "Quinn",
    lastName: "Ostrowski",
    titles: ["Program Manager"],
    deptName: "Ira A. Fulton Schools of Engineering",
    email: "quinn.ostrowski@asu.edu",
    phone: "480/965-3306",
    rankGroup: "2", // Academic Professionals
  },
  {
    asuriteId: "rdelacr",
    eid: "1350011",
    deptId: "1350",
    displayName: "Rowan Delacroix",
    firstName: "Rowan",
    lastName: "Delacroix",
    titles: ["Research Coordinator"],
    deptName: "School of Life Sciences",
    email: "rowan.delacroix@asu.edu",
    phone: "480/965-3307",
    rankGroup: "2", // Academic Professionals
  },
  {
    asuriteId: "bmontal",
    eid: "1344011",
    deptId: "1344",
    displayName: "Blair Montalvo",
    firstName: "Blair",
    lastName: "Montalvo",
    titles: ["Senior Academic Advisor"],
    deptName: "W. P. Carey School of Business",
    email: "blair.montalvo@asu.edu",
    phone: "480/965-3308",
    rankGroup: "2", // Academic Professionals
  },
  {
    asuriteId: "nsvensn",
    eid: "1353011",
    deptId: "1353",
    displayName: "Noa Svensson",
    firstName: "Noa",
    lastName: "Svensson",
    titles: ["Assistant Dean"],
    deptName: "College of Health Solutions",
    email: "noa.svensson@asu.edu",
    phone: "480/965-3309",
    rankGroup: "2", // Academic Professionals
  },
  {
    asuriteId: "ewhitak",
    eid: "1349011",
    deptId: "1349",
    displayName: "Ellis Whitaker",
    firstName: "Ellis",
    lastName: "Whitaker",
    titles: ["Adjunct Faculty"],
    deptName: "College of Global Futures",
    email: "ellis.whitaker@asu.edu",
    phone: "480/965-3310",
    rankGroup: "3", // Other Faculty and Academic Professionals
  },
  {
    asuriteId: "kfontai",
    eid: "1358012",
    deptId: "1358",
    displayName: "Kai Fontaine",
    firstName: "Kai",
    lastName: "Fontaine",
    titles: ["Emeritus Professor"],
    deptName: "Ira A. Fulton Schools of Engineering",
    email: "kai.fontaine@asu.edu",
    phone: "480/965-3311",
    rankGroup: "3", // Other Faculty and Academic Professionals
  },
  {
    asuriteId: "vsokolo",
    eid: "1344012",
    deptId: "1344",
    displayName: "Vera Sokolova",
    firstName: "Vera",
    lastName: "Sokolova",
    titles: ["Visiting Scholar"],
    deptName: "W. P. Carey School of Business",
    email: "vera.sokolova@asu.edu",
    phone: "480/965-3312",
    rankGroup: "3", // Other Faculty and Academic Professionals
  },
  {
    asuriteId: "tbranni",
    eid: "1518010",
    deptId: "1518",
    displayName: "Toby Brannigan",
    firstName: "Toby",
    lastName: "Brannigan",
    titles: ["IT Support Specialist"],
    deptName: "Herberger Institute for Design and the Arts",
    email: "toby.brannigan@asu.edu",
    phone: "480/965-3313",
    rankGroup: null,
  },
  {
    asuriteId: "ivasque",
    eid: "1520010",
    deptId: "1520",
    displayName: "Ines Vasquez",
    firstName: "Ines",
    lastName: "Vasquez",
    titles: ["Communications Manager"],
    deptName: "Watts College of Public Service and Community Solutions",
    email: "ines.vasquez@asu.edu",
    phone: "480/965-3314",
    rankGroup: null,
  },
  {
    asuriteId: "dmarsha",
    eid: "3534010",
    deptId: "3534",
    displayName: "Drew Marshall",
    firstName: "Drew",
    lastName: "Marshall",
    titles: ["Events Coordinator"],
    deptName: "Mary Lou Fulton Teachers College",
    email: "drew.marshall@asu.edu",
    phone: "480/965-3315",
    rankGroup: null,
  },
  {
    asuriteId: "ahuang2",
    eid: "1353012",
    deptId: "1353",
    displayName: "Ash Huang",
    firstName: "Ash",
    lastName: "Huang",
    titles: ["Budget Analyst"],
    deptName: "College of Health Solutions",
    email: "ash.huang@asu.edu",
    phone: "480/965-3316",
    rankGroup: null,
  },
  {
    asuriteId: "ncastil",
    eid: "1344013",
    deptId: "1344",
    displayName: "Nico Castillo",
    firstName: "Nico",
    lastName: "Castillo",
    titles: ["Facilities Manager"],
    deptName: "W. P. Carey School of Business",
    email: "nico.castillo@asu.edu",
    phone: "480/965-3317",
    rankGroup: null,
  },
  {
    asuriteId: "zwerner",
    eid: "1349012",
    deptId: "1349",
    displayName: "Zara Werner",
    firstName: "Zara",
    lastName: "Werner",
    titles: ["Office Manager"],
    deptName: "College of Global Futures",
    email: "zara.werner@asu.edu",
    phone: "480/965-3318",
    rankGroup: null,
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
