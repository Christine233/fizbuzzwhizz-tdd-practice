const fizBuzzWhizzModule = require('./fiz_buzz_whizz');

function testFizBuzzWhizz(){
	const expectedResult = "1 2 Fizz 4 Buzz Fizz Whizz 8 Fizz Buzz 11 Fizz Fizz Whizz FizzBuzz 16 17 Fizz 19 Buzz FizzWhizz 22 Fizz Fizz Buzz 26 Fizz Whizz 29 Fizz Fizz Fizz Fizz Fizz Fizz Fizz Fizz Fizz Fizz Buzz 41 FizzWhizz Fizz 44 FizzBuzz 46 47 Fizz Whizz Buzz Fizz 52 Fizz Fizz Buzz Whizz Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz BuzzWhizz 71 Fizz Fizz 74 FizzBuzz 76 Whizz Fizz 79 Buzz Fizz 82 Fizz FizzWhizz Buzz 86 Fizz 88 89 FizzBuzz Whizz 92 Fizz 94 Buzz Fizz 97 Whizz Fizz Buzz";
  const firstSpecialNumber = 3;
  const secondSpecialNumber = 5;
  const thirdSpecialNumber = 7;

	const result = fizBuzzWhizzModule.fizBuzzWhizz(firstSpecialNumber, secondSpecialNumber, thirdSpecialNumber) === expectedResult ? 'test passed.' : 'test failed.';
  console.log(result);
}

testFizBuzzWhizz();
