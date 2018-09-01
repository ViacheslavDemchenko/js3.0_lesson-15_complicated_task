const sum = require('./sum.js');
const num = require('./num.js');
const arr = require('./arr.js');

test('Функция возвращает true', () => {
  expect(sum(2, 2)).toBe(true);
});

test('Переменная num должна быть равна 5', () => {
  expect(num).toBe(5);
});

test('Функция each возвращает массив', () => {
  expect(Array.isArray(arr)).toBe(true);
});

test('Массив arr включает 5 элементов', () => {
  expect(arr).toHaveLength(5);
});

test('Из элементов массива получены квадратные корни', () => {
  	function makeTest() {
		for (let i = 0; i <= arr.length; i++) {
		    expect(arr[i]).toEqual(Math.sqrt(a[i]));
		}
	}
});	

