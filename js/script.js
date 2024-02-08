/***
 * The 'quotes' array contains a list of quote objects
 * - each with quote and source properties
 * - and optional citation, year and tag properties
 ***/
const quotes = [
    {
        quote: "The problem with quotes you find in the internet is, that you can never be sure about their origin.",
        source: "Leonardo da Vinci",
        tag: "humor",
    },
    {
        quote: "Follow the love in your heart - not the stress in your head.",
        source: "Pari",
        citation: "from a public live meeting",
        year: "2021",
        tag: "wisdom",
    },
    {
        quote: "I believe that everyone in the world has one poem, that is their soulmate.",
        source: "Nayyirah Waheed",
        tag: "poetry",
    },
    {
        quote: "A teacher has answers to questions. A coach has question to answers.",
        source: "Arjuna Ardagh",
        tag: "wisdom",
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
        quote: "To know that I'm nothing is wisdom. To know that I am everything is love. And between the two life flows.",
        source: "Nisargadatta",
        tag: "wisdom",
    },
    {
        quote: "If you argue with reality, you lose - but only always.",
        source: "Byron Katie",
        citation: 'from the book "Loving what is"',
    },
    {
        quote: "Set your life on fire, seek those who fan your flames.",
        source: "Rumi",
        tag: "poetry",
    },
];

/***
 * The 'getRandomQuote' function
 * -> returns a random quote from the 'quotes' array
 ***/
const getRandomQuote = () => {
    // Create random number to use as index for quotes array
    const randomNumber = Math.floor(Math.random() * quotes.length);
    // Return random quote by using the randomNumber as an index
    return quotes[randomNumber];
};

/***
 * The 'setRandomBackgroundColor' function
 * -> sets a random background color to the page
 ***/
const setRandomBackgroundColor = () => {
    // Create an array with random colors
    const randomColors = [
        "#03b4cb",
        "#468049",
        "#7567e4",
        "#f57369",
        "#d58919",
        "#810f95",
        "#4c4646",
        "#74b633",
        "#19dbf3",
        "#4e62ab",
        "#e4ce0a",
    ];
    // Create random number to use as index for randomColors array
    const randomNumber = Math.floor(Math.random() * randomColors.length);
    // Get a randomColor by using the random number as the index in the randomColors array
    const randomColor = randomColors[randomNumber];
    // Update the background color of the body
    document.querySelector("body").style.background = randomColor;
};

/***
 * The 'printQuote' function takes a random quote object to
 * -> create an html string
 * -> display the html string on the page
 ***/
const printQuote = () => {
    // Get a random quote
    const randomQuote = getRandomQuote();
    // Create the html for the display of the quote
    let htmlString = `
      <p class="quote">${randomQuote.quote}</p>
      <p class="source">${randomQuote.source}
    `;
    // Check if quote has citation, year and/or tag properties
    if (randomQuote.citation) {
        // Add citation property to htmlString
        htmlString += `<span class="citation">${randomQuote.citation}</span>`;
    }
    if (randomQuote.year) {
        // Add year to htmlString
        htmlString += `<span class="year">${randomQuote.year}</span>`;
    }
    if (randomQuote.tag) {
        // Add tag to htmlString
        htmlString += `<span class="tag">${randomQuote.tag}</span>`;
    }
    // Add the closing </p> to the htmlString
    htmlString += "</p>";
    // Add htmlString to page
    document.getElementById("quote-box").innerHTML = htmlString;
    // Set a random background color for the page
    setRandomBackgroundColor();
};
printQuote(); /* to have a random quote present the first time the page laods */

/***
 * The following timing function
 * -> prints a new quote to the page every 15 seconds
 ***/
setInterval(() => {
    printQuote();
}, 15000);

/***
 * The (provided) event listener below
 * -> listens to click events on the "Show another quote" page
 * -> displays a random quote on the page when the button is clicked
 ***/
document.getElementById("load-quote").addEventListener("click", printQuote, false);
