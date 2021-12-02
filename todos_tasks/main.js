const todoListId_1 = "sdsdsd2"
const todoListId_2 = "sds12d2"

const todoList = [
    {
        id: todoListId_1,
        title: "what to learn",
        filter: "all",
    },
    {
        id: todoListId_2,
        title: "what to buy",
        filter: "all",
    }
]

const tasks = {
    [todoListId_1]: [             // ключ может быть переменной ['first ids'] или выражением [1 + 32], но в квадратных скобках
        {id: "sd3dsa", title: "html", isDone: true},
        {id: "sd3ds1", title: "css", isDone: false},
        {id: "sd3ds2", title: "react", isDone: true}
    ],
    [todoListId_2]: [
        {id: "sd3d3", title: "meat", isDone: false},
        {id: "sd3d13", title: "eggs", isDone: true},
        {id: "sd3ds5", title: "cheese", isDone: false}
    ],

}


console.log(tasks[todoListId_1].filter(t => t.id !== "sd3dsa"))
console.log({...tasks, [todoListId_1]: tasks[todoListId_1].filter(t => t.id !== "sd3dsa")})
console.log({...tasks, [todoListId_1]: [...tasks[todoListId_1], {id: "sd3ds7", title: "ts", isDone: true}]})
console.log(typeof tasks)

// reduce сводит значение массива к одному значению
const numbers = [11, 2, 7, 4]
console.log(numbers.reduce((acc, el) => acc + el, 0)) // 0+13 = 13, 13+2 = 15, 15+7 = 22, 22+4 = 26//  0 - стандартное значение асс
console.log(numbers.reduce((acc, el) => acc > el ? acc : el)) // поиск наибольшего значения

let students = [
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
        scores: 89
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
    }
];

console.log(students.reduce((acc, el) => acc + el.scores, 0))
console.log(students.reduce((acc, el) => {
    if (el.scores >= 100) {
        acc.push(el)
    }
    return acc
}, []))
console.log(students.reduce((acc, el) => {
    if (el.name === 'Nick') {
        let copyNick = {...el, isMarried: true}
        acc.push(copyNick)
        return acc // обязательно, что бы следующий элемент использовал асс
    }
    acc.push(el)
    return acc
}, []))