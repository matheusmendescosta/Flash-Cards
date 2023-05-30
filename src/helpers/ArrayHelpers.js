export function helperShufflerArray(array) {
  const shufflerArray = [...array];

  for (let i = shufflerArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shufflerArray[i], shufflerArray[j]] = [shufflerArray[j], shufflerArray[i]];
  }

  return shufflerArray;
}
