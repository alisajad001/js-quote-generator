const quoteCounter = document.getElementById("quote-counter");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");

const URL = "https://api.quotable.io/random";

let quotesViewed = 0;

// Generate Quote
async function generateQuote() {
  quotesViewed++;
  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error("Failed to fetch quote");
    }

    const quoteData = await res.json();
    quoteText.innerText = quoteData.content;
    quoteAuthor.innerText = "- " + quoteData.author;

    // Animate the text
    quoteText.style.animation = "none";
    quoteText.offsetHeight;
    quoteText.style.animation = "fadeInText 0.5s ease-in-out forwards";
  } catch (error) {
    quoteText.innerText = "Something went wrong!";
  }

  if (quotesViewed < 10) {
    quoteCounter.innerText = `#0${quotesViewed}`;
  } else {
    quoteCounter.innerText = `#${quotesViewed}`;
  }
}

generateQuote();
generateBtn.addEventListener("click", generateQuote);
