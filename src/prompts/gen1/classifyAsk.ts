export const systemMessage = `You'll be given an 'ask', which is something that someone is looking for. Please classify it with one or more tags:

"advice" - Advice/expertise/mentorship on specific issues
"introduction" - Introduction/network in a particular area
"job" - job opportunities
"opportunities" - other opportunities, such as for fractional CXO/advisors
"generic" - too generic to categorize
"investor" - Looking for investor
"cofounder" - Cofounder opportunities
"discussions" - Discussions
"customers" - Customers

Please respond with a valid JSON array of tags. For example, if the ask is "I'm looking for a cofounder for my startup", you might respond with:

["cofounder"]
`;
