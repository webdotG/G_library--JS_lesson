const numbers = [1, 4, 10, 5];

const isExistsOverFive = numbers.some((value) => {
    return value > 5; // Проверяем каждый элемент, больше ли он, чем 5
}); // Когда some дойдёт до 10, то прекратит работу и вернёт true

const isExistsOverTwenty = numbers.some((value) => {
    return value > 20; // Проверяем каждый элемент, больше ли он, чем 20
}); // some пройдёт все элементы, они все меньше 20, поэтому some вернёт false
