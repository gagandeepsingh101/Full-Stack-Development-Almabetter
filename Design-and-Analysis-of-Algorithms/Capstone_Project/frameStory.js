// Parts of Speech

// Create a frameStory function with a functional argument string that takes a string consisting of multiple words. Your task is to frame a story using these words, following a specific pattern where each word represents a part of speech to be used in the story. Replace each word in the string with its corresponding part of speech and construct the story accordingly.

// Example 1:
// Input: "The noun verb the adjective noun."
// Output: "The dog chased the big cat."
// Explanation:
// The input string contains five words: "The", "noun", "verb", "the", "adjective", and "noun".
// Each of these words represents a part of speech that should be used in the story.
// In this story, "The" is used as it is, "noun" is replaced with "dog",
// "verb" is replaced with "chased", "the" is used as it is again,
// "adjective" is replaced with "big", and the last "noun" is replaced with "cat".

// Example 2:
// Input: "An adjective noun verb over the adjective noun."
// Output: "An elegant horse trotted over the green hill."
// Explanation:
// This input string consists of eight words, alternating between "an", "adjective",
// "noun", "verb", "over", "the", "adjective", and "noun". In the output story,
// "an" is used as it is, "adjective" is replaced with "elegant",
// "noun" is replaced with "horse", "verb" is replaced with "trotted",
// "over" is used as it is, "the" is skipped, "adjective" is replaced with "green",
// and the last "noun" is replaced with "hill".

// Constraints:
// The input string will consist of alphabetic characters (lowercase and uppercase) and spaces.
// The words in the string will be separated by a single space.
// The number of words in the string can vary.

// Worst Case

function worstframeStory(str) {
  // Write your code inside this function only.
  let partspeech = {
    noun: ["dog", "cat", "horse", "tree", "house"],
    verb: ["chased", "jumped", "ran", "slept", "laughed"],
    adjective: ["big", "small", "elegant", "green", "red"],
    adverb: ["quickly", "silently", "happily", "loudly", "slowly"],
    article: ["the", "an", "a"],
    preposition: ["over", "under", "around", "beneath", "between"],
  };
  let strWords = str.replace(".", "").split(" ");
  for (let i = 0; i < strWords.length; i++) {
    if (strWords[i] in partspeech) {
      strWords[i] = partspeech[strWords[i]][Math.floor(5 - Math.random() * 5)];
    }
  }
  return strWords.join(" ") + ".";
}

// Best Case

function bestframeStory(str) {
  // Write your code inside this function only.
  const words = inputString.split(" ");
  const result = words.join(" ");
  return result;
}
