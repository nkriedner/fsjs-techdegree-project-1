/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
const quotes = [
    {
        quote: "The problem with quotes you find in the internet is, that you can never be sure about their origin.",
        source: "Leonardo da Vinci",
    },
    {
        quote: "Follow the love in your heart - not the stress in your head.",
        source: "Pari",
        citation: "from a public live meeting",
        year: 2021,
    },
    {
        quote: "I believe that everyone in the world has one poem, that is their soulmate.",
        source: "Nayyirah Waheed",
    },
    {
        quote: "A teacher has answers to questions. A coach has question to answers.",
        source: "Arjuna Ardagh",
    },
    {
        quote: "The key to freedom? End every judgement with a question mark.",
        source: "Byron Katie",
    },
    {
        quote: "We don't connect because we are cool, we connect in our brokenness.",
        source: "Zan Perrion",
        citation: 'from the book "The Alabaster Girl"',
        year: "2013",
    },
    {
        quote: "Wealth is the ability to fully experience life.",
        source: "Thoreau",
    },
    {
        quote: "To know that I'm nothing is wisdom. To know that I am everything is love. And between the two live is moving.",
        source: "Nisargadatta",
    },
    {
        quote: "If you argue with reality, you lose - but only always.",
        source: "Byron Katie",
        citation: 'from the book "Loving what is"',
    },
    {
        quote: "Set your life on fire, seek those who fan your flames.",
        source: "Rumi",
    },
];

/***
 * `getRandomQuote` function
 ***/

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById("load-quote").addEventListener("click", printQuote, false);
