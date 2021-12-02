const arr = [123, 533, 3, 611, 12, 64, 578]

//bubble sort
for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
        if (arr[i] > arr[i + 1]) {
            // let temp = arr[i + 1]
            // arr[i + 1] = arr[i]
            // arr[i] = temp
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        }
    }
}

console.log(arr)

//sort
const names = [
    "Bob", "Alex", "Nick",
    "Donald", "Joe", "999",
    "!alex", "Юрий", "!юрий"
]
console.log(names.sort())
//['!alex', '!юрий', '999', 'Alex', 'Bob', 'Donald', 'Joe', 'Nick', 'Юрий']

const num = [1, 56, 790, 10, 100, 456, 320]
console.log(num.sort())
//[1, 10, 100, 320, 456, 56, 790]

// compare function

const compFn = (a, b) => {
    if(a > b){
        return 999//положительное значение
    } else {
        return -2//отрицательное значение
    }
}
console.log(num.sort(compFn))
//[1, 10, 56, 100, 320, 456, 790]

const compFnn = (a, b) => a - b
console.log(num.sort(compFnn)) //убывание b -a
//[1, 10, 56, 100, 320, 456, 790]


const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
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
        scores: 121
    },
];

console.log(students.sort((a, b) => a.age - b.age)
    .reverse()) //--для сортировки массива по убыванию по scores

console.log(students.sort((a, b) => a.name.toLowerCase() <= b.name.toLowerCase() ? -1 : 1)) //для соритровки по алфавиту и регистру

