/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// 159
/*
console.log(parseInt('10px')) // 10
console.log(Number.parseInt('e23')) // NaN

console.log(parseInt('     2.3rem ')) //2
console.log(parseFloat('       2.33rem  ')) // 2.33

console.log(isNaN(20)) // false
console.log(isNaN('20')) // false
console.log(isNaN(+'20')) // false
console.log(isNaN(23/0)) // false

console.log(isFinite(20)) // true
console.log(isFinite(+'20X')) // false
console.log(isFinite(23/0)) // false
console.log(isFinite('20')) // true
*/

// 160
/*
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(4, 5, 6, 32, 35));
console.log(Math.max(4, 5, 6, 32, 35, '23'));
console.log(Math.max(4, 5, 6, 32, 35, '23px'));

console.log(Math.min(23, 23, 5, 654, 2));

console.log(Math.PI);

console.log(Math.trunc(Math.random() * 10) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(1, 5));

console.log((2.3).toFixed());
*/

// 161
/*
const isEven = n => n % 2 === 0;

console.log(isEven(21));
console.log(isEven(10));
console.log(isEven(534));

labelBalance.addEventListener('click' , function(){
  [...document.querySelectorAll('.movements__row')].forEach((row , i) => {
      if(i % 2 === 0) row.style.color = 'red'
      if(i % 3 === 0) row.style.color = 'blue'
  })
})
  */
//  162
/*
 const num1 =283_423_424_000_99
 const num2 = 324_00
 const num3 = 3_2400

 const PI  = 3.14_15

 console.log(num1 , num2 , num3 , PI)
 console.log(Number('222_000')) // Nan
 console.log(parseInt('222_000')) // 222
 */
// 163
/*
console.log(2 ** 53 - 1 )
console.log(Number.MAX_SAFE_INTEGER)
console.log( 2**53 +32 )
console.log( 2** 53 + 1)
console.log( 2** 53 +10)

console.log( 42342353245342324523453425345345235 )
console.log( 42342353245342324523453425345345235n )
console.log( BigInt(42342353245) )

//operations
console.log(1000n + 12312n)
console.log(34253253245324534534253425n * 23453245345n)

const huge = 42342342342342423n
const num =23
console.log(huge * BigInt(num))

//exceptions
console.log(20n > 15)
console.log(20n === 20)
console.log(typeof 20n)
console.log(20n == 20)
console.log(20n == '20')

console.log(huge + '  is big num')

// divisions
console.log(11n / 3n)
console.log(10 / 3)
*/
// 164
/*
// const now = new Date()
// console.log(now)

console.log(new Date('Aug 01 2020 18:05:41'))
console.log(new Date('December 24 , 2015'))
console.log(new Date(account1.movementsDates[0]))

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142249780000));

console.log(Date.now());

future.setFullYear(2024);
console.log(future.getFullYear());
*/
/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const clacDaysPassed = (data1, date2) =>
  Math.abs(date2 - data1) / (1000 * 60 * 60 * 24);

console.log(clacDaysPassed(new Date(2037, 10, 19), new Date(2037, 10, 28)));
*/

// 169
// setTimeout
/*
const x = 3;

const timer = setTimeout(
  message => console.log(`new ${message}`),
  1000,
  'hello world '
);
if (x === 3) clearTimeout(timer);

// setInterval

// setInterval(() => {
//   const now = new Date();

//   console.log(now); 
// }, 1000);
*/