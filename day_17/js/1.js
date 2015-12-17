var lines = `20
15
10
5
5`.split('\n');

function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur;

    if (memo === undefined) {
      memo = [];
    }

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}
