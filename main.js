var arrNumbers = [];
var arrPrimeNumbers = [];
var num;

for (let i = 1; i <= 10; i++) {
  num = prompt(`NHẬP SỐ THỨ ${i}: `);
  num = parseInt(num);
  arrNumbers.push(num);
}
document.querySelector('.text').innerText = `Các số vừa nhập là: ${arrNumbers}`

for (let i = 0; i < arrNumbers.length; i++) {
  var count = 0;
  for (let j = 1; j <= arrNumbers[i]; j++) {
    arrNumbers[i] % j === 0 && (count += 1);
  }
  count === 2 && arrPrimeNumbers.push(arrNumbers[i]);
}

document.querySelector(".result").innerText =
  arrPrimeNumbers.length !== 0
    ? `Số nguyên tố: ${arrPrimeNumbers}`
    : `Các số vừa nhập không có số nào là số nguyên tố`;
