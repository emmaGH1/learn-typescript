"use strict";
// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
todaysTransactions.prop = 19;
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// student.test = 'MTH 203'
// console.log(student.test)
// for (const key in student) {
//     console.log(`${key}: ${student[key as keyof Student]}`)
// }
// Object.keys(student).map(key => 
//       console.log(student[key as keyof typeof student])
// )
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'classes');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
