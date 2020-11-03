// Напишите функцию, которая объединяет два списка, чередуя элементы.

function merge(a, b) {
  let result = [];
  let len = a.length >= b.length ? a.length : b.length;
  for (let i = 0; i < len; i++) {
    if (a[i])
      result.push(a[i]);
    if (b[i])
      result.push(b[i]);
  }
  return result;
}

console.log(merge([1, 2, 3, 4], ['a', 'b', 'c']));