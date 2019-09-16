class permutation {
  constructor() {
    this.permutations = [];
  }
  getPermutations(array, permutation = []) {
    if (array.length === 0) {
      this.permutations.push(permutation);
    } else {
      for (let i = 0; i < array.length; i++) {
        let current = array.slice();
        let next = current.splice(i, 1);
        this.getPermutations(current.slice(), permutation.concat(next));
      }
    }
  }
}
let p1 = new permutation();
p1.getPermutations([1, 2, 3, 4]);
console.log(p1.permutations);
