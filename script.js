function permuteAPalindrome(input) {
  let obj = {};
  for (el in input) {
    if (obj[el]) obj[el]++;
    else obj[el] = 1;
  }
  let odd = 0;
  for (let key in obj) {
    if (obj[key] % 2 === 1) odd++;
  }
  return odd <= 1;
}
console.log(permuteAPalindrome("baabcd"));
