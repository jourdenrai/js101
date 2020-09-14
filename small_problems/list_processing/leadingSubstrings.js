

function leadingSubstrings(string) {
  let result = '';
  return '' + string.split('').map(val => result += val);

}


leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]