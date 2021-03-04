const toFlat = (array) => {
	let result = [];
  for (let elem of array) {
  	if (Array.isArray(elem)) {
    	result = [...result, ...toFlat(elem)];
    } else {
    	result = [...result, elem];
    }
  }
  return result;
};
