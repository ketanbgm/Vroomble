class search {
  binarySearch(array, l, r, x) {
    if (r >= l) {
      const mid = parseInt(l + (r - l) / 2);
      if (array[mid] == x) return mid;
      if (array[mid] > x) return this.binarySearch(array, l, mid - 1, x);
      return this.binarySearch(array, mid + 1, r, x);
    }
    return -1;
  }

  getPositions(array, target) {
    const start = this.binarySearch(array, 0, array.length, target);
    if (start == -1) return [-1, -1];
    let end = start;
    while (array[end] == target && end < array.length) {
      end++;
    }
    return [start, end - 1];
  }
}

let s1 = new search();
const array = [5, 7, 7, 8, 8, 10]; // Change the array
const target = 10; // chnge the target element to simulate
const result = s1.getPositions(array, target);
console.log(`Indexes : ${result}`);
