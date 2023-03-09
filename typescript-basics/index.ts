 //Partial Utility

 // This helps to update an object without overwriting the object
 interface Assignment {
    studentId: string
    title: string
    grade: number
    verified?: boolean
 }

 const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
   return { ...assign, ...propsToUpdate}
 }

const assign1: Assignment = {
   studentId: 'gly355',
   title: 'Field Work',
   grade: 92
}

// console.log(updateAssignment(assign1,{studentId: 'CompEng 101'}))

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95})

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
   return assign
}

const assignVerified: Readonly<Assignment> = {
   ...assignGraded, verified: true
}

recordAssignment({...assignVerified, verified: true})

//Record

const hexColorMap: Record<string, string> = {
   red: "FF0000",
   green: "00FF00",
   blue: "0000FF"
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
   Sara: "A",
   "Kelly": "B"
}

interface Grades {
   assign1: number,
   assign2: number
}

const gradeData: Record<Students, Grades> = {
   Sara: {assign1: 85, assign2: 93},
   Kelly: { assign1: 76, assign2: 15}
}

//Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
   studentId: "k123",
   grade: 99,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
   studentId: "Emma2023",
   title: "Final Project"
}

//Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">

// Nonnullable

type AllPossibleGrades = "Dave" | "John" | null
type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType

const createNewAssign = (title: string, points: number) => {
   return { title, points}
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)

console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>

const AssignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...AssignArgs)
console.log(tsAssign2)

// Awaited - helps us with the ReturnType of a Promise

interface User {
   id: number,
   name: string,
   username: string,
   email: string
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .catch(err => {
      if (err instanceof Error) console.log(err.message)
    })
    return data
}

type fetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))