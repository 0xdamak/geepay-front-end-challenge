export function capitalizeFirstLetters(sentence: string): string {
  const words = sentence.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.length === 0) {
      return word;
    }
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  });
  return capitalizedWords.join(" ");
}
