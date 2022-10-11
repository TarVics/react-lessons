// 1. створити інтерфейс на основі цього об'єкта:
//    Зверніть увагу там де масиви... в них може бути багато однотипних об'єктів
// 2. Виконати типізацію функцій:
var Gender;
(function (Gender) {
    Gender["male"] = "male";
    Gender["female"] = "female";
})(Gender || (Gender = {}));
var user = {
    name: "Max",
    age: 18,
    gender: Gender.male
};
function sum(a, b) {
    return a + b;
}
function showSum(a, b) {
    console.log(a + b);
}
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);
console.log(user);
