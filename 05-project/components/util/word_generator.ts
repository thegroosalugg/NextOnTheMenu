const latinWords = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
  'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor',
  'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua'
];

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;


export function randomParagraph(wordCount = 50) {
  let result = '';
  for (let i = 0; i < wordCount; i++) {
    const word = latinWords[rand(0, latinWords.length - 1)];
    result += word + (i === wordCount - 1 ? '.' : ' ');
  }
  return result;
}
