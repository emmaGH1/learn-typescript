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