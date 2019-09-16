class anagrams {
  getObjectKey(word) {
    if (!word) {
      return;
    }
    word = word.split("");
    word = word.sort();
    word = word.join("");
    return word;
  }

  getAnagrams(words) {
    const anagrams = {};
    words.forEach(word => {
      const tokenizedWord = this.getObjectKey(word);
      if (anagrams[tokenizedWord]) return anagrams[tokenizedWord].push(word);
      anagrams[tokenizedWord] = [word];
    });
    let array = [];
    Object.keys(anagrams).forEach(key => {
      array.push(anagrams[key]);
    });
    return array;
  }
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

let a1 = new anagrams();
const anagram = a1.getAnagrams(words);
console.log(anagram);
