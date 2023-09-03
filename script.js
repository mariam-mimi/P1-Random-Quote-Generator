/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * stores all quotes, sources, citations, years, and tags
***/
const quotes = [
  {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
   source: "Nelson Mandela",
   year: 1998,
   tags: ", Inspirational"},
  {quote: "Your time is limited, so don't waste it living someone else's life.",
  source: "Steve Jobs",
  citation: "Stanford Commencement Speech",
  year: 2005,
  tags: ", Inspirational"},
  {quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  source: "Oprah Winfrey",
  tags: ", Inspirational"},
  {quote: "You're braver than you believe, stronger than you seem, and smarter than you think.",
  source: "Christopher Robin",
  citation: "Winnie The Pooh",
  year: 1977,
  tags: ", Inspirational, Movie"},
  {quote: "No amount of money ever bought a second of time.",
  source: "Tony Stark",
  citation: "Avengers: Endgame",
  year: 2019,
  tags: ", Inspirational, Movie"},
  {quote: "May the Force be with you.",
  source: "Obi-Wan Kenobi",
  citation: "Star Wars",
  year: 1977,
  tags: ", Fun, Movie"},
  {quote: "Mama always said life was like a box of chocolates.",
  source: "Forrest Gump",
  citation: "Forrest Gump",
  year: 1994,
  tags: ", Movie, Funny"},
  {quote: "Be the change that you wish to see in the world.",
  source: "Mahatma Gandhi",
  tags: ", Inspirational, Motivational"}
];


/***
 * `getRandomQuote` function
 * Forms a random number that sets randomQuote to the random integer to choose a random quote index
***/
function getRandomQuote(){
  let randomNum = Math.floor(Math.random() * quotes.length);
  const randomQuote = randomNum;
  return quotes[randomQuote];
};

/***
 * `printQuote` function
 * sets getQuote to the random quote index 
 * variable created to output the quote and source into HTML 
 * checks if the quote has a citation, year, or tags and if it does, it outputs it next to the source
***/
function printQuote() {
  let getQuote = getRandomQuote();
  let quoteObj = 
    `<p class="quote">${getQuote.quote}</p>
    <p class="source">${getQuote.source} `;
    if (getQuote.citation){
      quoteObj += `<span class="citation">${getQuote.citation}</span>`;
    }
    if (getQuote.year){
      quoteObj += `<span class="year">${getQuote.year}</span>`
    }
    if (getQuote.tags){
      quoteObj += `<span class="tags">${getQuote.tags}</span>`
    }
    quoteObj += `</p>`;
    document.getElementById('quote-box').innerHTML = quoteObj; 
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

// Creates array for colors for background
const colors = [
  'red',
  'green',
  'blue'
]

// Function to get a random integer to choose an index from the color array
function randomBackground(){
  const color = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[color];
};

// When the buton is clicked, the background color changes as well 
document.getElementById('load-quote').addEventListener("click", randomBackground, false);

// Sets a timer for the quote to automatically refresh at regular intervals
// Also sets a timer for the background color to change at the same regular interval
setInterval(printQuote, 6000);
setInterval(randomBackground, 6000);