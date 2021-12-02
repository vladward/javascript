const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};

//Проверка:
console.log(user === copyUser)  //false
console.log(user.friends === copyUser.friends) //true

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {
    ...user,
    friends: [...user.friends]
};

//Проверка:
console.log(user === deepCopyUser) //- что должно быть в консоли? false
console.log(user.friends === deepCopyUser.friends) //- что должно быть в консоли? false

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
console.log(copyStudents === students) //- что должно быть в консоли?
console.log(copyStudents[0] === students[0]) //- что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(st => ({...st}));

//Проверка:
console.log(deepCopyStudents === students) //- что должно быть в консоли? //false
console.log(deepCopyStudents[0] === students[0]) //- что должно быть в консоли? //false

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте deepCopyStudents по алфавиту (sort)
let sortByName;
console.log(sortByName = deepCopyStudents.sort((a, b) => a.name.toLowerCase() <= b.name.toLowerCase() ? -1 : 1))

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortByScores;
console.log(sortByScores = deepCopyStudents.sort((a, b) => a.scores - b.scores).reverse());

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents;
console.log(bestStudents = deepCopyStudents.filter(d => d.scores > 100))

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents;
console.log(topStudents = deepCopyStudents.splice(0, 3))
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор)
let newDeepCopyStudents;
// console.log(newDeepCopyStudents = [
//     ...topStudents,
//     ...deepCopyStudents
// ].reverse())

//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents;
console.log(notMarriedStudents = students.filter( st => !st.isMarried ))

//8. Сформируйте массив имён студентов (map)
let studentsNames;
console.log(studentsNames = students.map( st => st.name))

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace;
console.log(nameWithSpace = studentsNames.join(' '))
let namesWithComma;
console.log(namesWithComma = studentsNames.join(', '))

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents;
console.log(trueStudents = students.map( st => ({...st, isStudent: true})))

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick;
console.log(studentsWithMarriedNick = students.map(st => st.name === "Nick" ? {...st, isMarried: true} : st))

//11. Найдите студента по имени Ann (find)
let ann;
console.log(ann = students.find(a => a.name === 'Ann'))

//12. Найдите студента с самым высоким баллом (reduce)
let bestStudent;
console.log(bestStudent = students.reduce((acc, value) => {
    return acc.scores > value.scores ? acc : value
}))

//13. Найдите сумму баллов всех студентов (reduce)

// И поднимаем руку!!!!

let scoresSum;
console.log(scoresSum = students.reduce((acc, st) => acc + st.scores, 0))
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => students.map(main => ({ ...main, friends: (students.filter(cur => cur.name !== main.name)).map(m => m.name)}));
console.log(addFriends(students));









