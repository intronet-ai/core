import { faker } from '@faker-js/faker';
import * as Factory from 'factory.ts';
import { sample } from 'lodash';
import { ResponseValue } from '../schema';
import { TimestampStub } from '../utils/TimestampStub';

export const makeResponseFactory = (TimestampKlass: typeof TimestampStub) =>
  Factory.makeFactory<ResponseValue>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    uid: faker.random.alphaNumeric(28),
    communityId: faker.random.alphaNumeric(28),
    canOffer: Factory.each(() => sample(canOfferSamples) as string),
    helpWanted: Factory.each(() => sample(helpWantedSamples) as string),
    workingOn: Factory.each(() => sample(workingOnSamples) as string),
  });

const canOfferSamples = [
  'I could help with many things Brazil related and venture capital ecosystem',
  'Giving advice on web or data software stacks or engineering team processes, I have some interesting SAFE terms that can help to align interests of founders and investors, happy to be a "rubber duck" to talk through startup or venture ideas',
  'Not sure what other support is needed (not sure who is in this group), always happy to chat about anything interesting (startup related or otherwise). If anyone is building anything at the early stage in any part of the world, would love to chat. Have a very global, macroeconomic viewpoint and can be helpful',
  'Share learnings on research into hundreds of scaleups ($100M - ~$2B valuation), eg HRP expansion, product expansion, team growth/change, etc.\n' +
    '\n' +
    'Talk about early product / business validation',
  'I could support on due diligence, drafting investment memos, or support on executing an investment. Make introductions to corporates within the logistics space in the Middle East. Raise funding and introduce to Angel investors (checks between $10-50k)',
  'Financial planning, financial managment',
  'Providing capital to VC funds that fit our mandates;\n' +
    'Introducing startups to VCs and vice-versa;\n' +
    'Hardware supply chain resources from China;\n' +
    'Know how in edtech, cross-border ecommerce, growth hacking;\n' +
    'Connections with Oxbridge;\n' +
    'Connections with China',
  'How to cook the perfect omelette',
  'investment memos, dd calls, provide insights, deal sourcing, connect other investors (because previously I worked in the VC industry and I like connecting with people)',
  'Industry insights on tech, consumer and DD experience',
  'Guidance/intros for anything to do with financial trading/market data',
  'Best practices in hiring and designing company culture. Network in China and SEA. Resources across Google',
  'Trying to get my contact in the satellite industry to give his feedback on Cosmic Shielding. Also I can support evaluation of any climate tech or green tech startups',
  "I can help understand a company finances, what's a good valuation, etc.",
  'executive/business coaching; guidance on hydrogen electrolysis or manufacturing product or oil and energy or fundamental investing or scaling/improving operations; intros to startup people around UK and HK and SG',
];

const helpWantedSamples = [
  'Family Offices in Europe, Learning more about personal investing more broadly',
  'Finding more great react native / data engineers, intros to angel investors that invest in digital mental health or wearable companies',
  'Alternative investments, building some models around this. If anyone has an interest would love to chat further',
  'Introductions to people/companies who are exploring delivering this kind of service',
  'A mentor that has been involved in AI either an investor or operator',
  'Introductions to LPs that are interested in emerging markets listed equities',
  'Warm introduction to stellar/tier-1 VC funds with AI focus;\n' +
    'Introduction to solid technical founders who are looking for incubation resources;\n' +
    'Framework and methodologies around fund-picking and asset allocation;\n' +
    'Hire a full time person on broad asset allocation and wealth management;\n' +
    'Invite renowned AI speaker to speak at my event\n' +
    'Introduction to good courses and degree programmes in AI;\n' +
    'Introduction to really good immigration lawyer;\n' +
    'Introduction to really good corporate lawyer;',
  'Learning to juggle',
  "Expanding network, potentially finding a job. I like looking around at interesting new things. At first, it's more like making friends.",
  'Pricing mechanism of commodities, application of game theory in real world business competition',
  'Cloud infra and best ways to access different clouds',
  'Introduction to founders of gen AI startups',
  "Assistance to evaluate companies that I have identified as possible investment opportunities (also time to actually do the evaluation, but that one's on me!)",
  'I understand finance very well',
  'good virtual assistants, venture debt options, europe based climate tech job opportunities for foreigners, intros to more good people in montreal',
];

const workingOnSamples = [
  'Developing a network for an American think tank focused on health, finance and strategic philanthropy.',
  'Wearable device and app to help overcome addictions (https://impulse.training)',
  'Closing out my first venture fund!',
  'Building a consulting practice for companies who want to offer embedded finance (or banks that want to power it via banking-as-a-service',
  'Currently working on building an investment framework to invest in startups in the AI space',
  'A start-up fund',
  'Allocating assets for wealthy families; Investing in AI startups; Organizing a Silicon Valley based AI event; Incubating AI startups; Learning about AI',
  'Digital mental health app to help people overcome addictions',
  "Singapore, I just graduated from INSEAD and am working on actively recruiting in financial industry, but will definately within investment role. I'm HH scout, MBA intern hired by Jay.",
  'I am working on a strategy case for global leading photovoltaic company',
  'Optimizing access to crypto trading markets for algorithmic trading.',
  'Identify high potential gen AI startups',
  'Managing a series of multimillion-dollar decarbonisation retrofit projects for dry bulk cargo vessels',
  'I work as a Senior Quantitative Trader in an HFT firm',
  'growing a microfinancing immigration loans for lawyers in canada, growing a laser engraving and cutting business (think wood signs, coasters, frame, puzzles, wedding stuff, frames), tech/harware investments, hydrogen electrolysis & clean tech, francophone west africa ag and infrastructure',
];
