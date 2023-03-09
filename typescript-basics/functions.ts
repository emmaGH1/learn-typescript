function addNumbers(a: number, b: number): number {
    return a + b
}

export default addNumbers


const getName = (user: { first: string, last: string }) => {
    `${user.first} ${ user.last}`
}
