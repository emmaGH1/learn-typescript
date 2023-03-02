// Index Signatures

// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// }

interface TransactionObj {
    [index: string]: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
}

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

todaysTransactions.prop = 19
// console.log(todaysTransactions.prop)
// console.log(todaysNet(todaysTransactions));

interface Student {
    // [index: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes: number[]
}

const student: Student  = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

// student.test = 'MTH 203'
// console.log(student.test)

// for (const key in student) {
//     console.log(`${key}: ${student[key as keyof Student]}`)
// }

// Object.keys(student).map(key => 
//       console.log(student[key as keyof typeof student])
// )

const logStudentKey = (student: Student, key: keyof Student): void => {
   console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'classes')

// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}
