const verseList = [
  { book: "john", chapter: 3, verse: 16 },
  { book: "jeremiah", chapter: 29, verse: 11 },
  { book: "philippians", chapter: 4, verse: 13 },
  { book: "romans", chapter: 8, verse: 28 },
  { book: "proverbs", chapter: 3, verse: 5 },
  { book: "psalms", chapter: 23, verse: 1 },
  { book: "genesis", chapter: 1, verse: 1 },
  { book: "joshua", chapter: 1, verse: 9 },
  { book: "isaiah", chapter: 41, verse: 10 },
  { book: "matthew", chapter: 6, verse: 33 },
  { book: "psalms", chapter: 46, verse: 1 },
  { book: "1-corinthians", chapter: 13, verse: 4 },
  { book: "romans", chapter: 12, verse: 2 },
  { book: "matthew", chapter: 11, verse: 28 },
  { book: "isaiah", chapter: 40, verse: 31 },
  { book: "ephesians", chapter: 2, verse: 8 },
  { book: "2-corinthians", chapter: 5, verse: 7 },
  { book: "proverbs", chapter: 3, verse: 5 },
  { book: "psalms", chapter: 118, verse: 24 },
  { book: "psalms", chapter: 27, verse: 1 },
  { book: "hebrews", chapter: 11, verse: 1 },
  { book: "1-john", chapter: 4, verse: 19 },
  { book: "romans", chapter: 5, verse: 8 },
  { book: "philippians", chapter: 4, verse: 6 },
  { book: "psalms", chapter: 91, verse: 1 },
  { book: "matthew", chapter: 5, verse: 16 },
  { book: "romans", chapter: 10, verse: 9 },
  { book: "1-peter", chapter: 5, verse: 7 },
  { book: "2-timothy", chapter: 1, verse: 7 },
  { book: "luke", chapter: 6, verse: 31 },
  { book: "proverbs", chapter: 18, verse: 10 },
  { book: "psalms", chapter: 37, verse: 4 },
  { book: "john", chapter: 14, verse: 6 },
  { book: "matthew", chapter: 28, verse: 19 },
  { book: "galatians", chapter: 5, verse: 22 },
  { book: "psalms", chapter: 119, verse: 105 },
  { book: "james", chapter: 1, verse: 2 },
  { book: "romans", chapter: 15, verse: 13 },
  { book: "psalms", chapter: 34, verse: 8 },
  { book: "matthew", chapter: 7, verse: 7 },
  { book: "ephesians", chapter: 6, verse: 10 },
  { book: "james", chapter: 1, verse: 12 },
  { book: "john", chapter: 16, verse: 33 },
  { book: "psalms", chapter: 55, verse: 22 },
  { book: "1-corinthians", chapter: 10, verse: 13 },
  { book: "psalms", chapter: 51, verse: 10 },
  { book: "colossians", chapter: 3, verse: 23 },
  { book: "micah", chapter: 6, verse: 8 },
  { book: "psalms", chapter: 121, verse: 1 },
  { book: "hebrews", chapter: 13, verse: 5 }
];

const version = "en-kjv";

const verseTitle = document.querySelector(".verse-title");
const verseText = document.querySelector(".scripture");

async function getRandomVerse() {
  const randomVerse = verseList[Math.floor(Math.random() * verseList.length)];
  const { book, chapter, verse } = randomVerse;

  const API = `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}/verses/${verse}.json`;

  try {
    const response = await fetch(API);
    if (!response.ok) throw new Error("Verse not found");

    const data = await response.json();

    verseTitle.textContent = `${book} ${chapter}:${verse}`;
    verseText.textContent = data.text;

  } catch (error) {
    verseTitle.textContent = "Error";
    verseText.textContent = "Could not load verse.";
    console.error(error);
  }
}

// Load a random verse when the page loads
document.addEventListener("DOMContentLoaded", () => getRandomVerse());