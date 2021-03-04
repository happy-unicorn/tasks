const isPermutatio1 = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }
  const helper = (s) => {
    return s.split('').sort().join();
  }
  return helper(s1) === helper(s2);
};

const isPermutation2 = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }
	const counter = new Array(128).fill(0);
  for(let i = 0; i < s1.length; i++) {
  	counter[s1.charCodeAt(i)]++;
  }
  for (let i = 0; i < s2.length; i++) {
    if (--counter[s2.charCodeAt(i)] < 0) {
      return false;
    }
  }
  return true;
};
