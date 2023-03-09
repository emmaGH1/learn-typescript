"use strict";
//Partial Utility
const updateAssignment = (assign, propsToUpdate) => {
    return { ...assign, ...propsToUpdate };
};
const assign1 = {
    studentId: 'gly355',
    title: 'Field Work',
    grade: 92
};
// console.log(updateAssignment(assign1,{studentId: 'CompEng 101'}))
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Required and Readonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = {
    ...assignGraded, verified: true
};
recordAssignment({ ...assignVerified, verified: true });
//Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    Sara: "A",
    "Kelly": "B"
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 }
};
const score = {
    studentId: "k123",
    grade: 99,
};
const preview = {
    studentId: "Emma2023",
    title: "Final Project"
};
// ReturnType
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const AssignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...AssignArgs);
console.log(tsAssign2);
const fetchUsers = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
};
fetchUsers().then(users => console.log(users));
