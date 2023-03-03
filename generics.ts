const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

// console.log(isObj({name: 'emma'}))

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false}
    }
    else if (isObj(arg) && !Object.keys(arg as keyof T).length){
      return { arg, is: false}
    }
    return { arg, is: !!arg}
}

// console.log(isTrue(['mia', 'ella']))
// console.log(isTrue({}))

interface BoolCheck<T> {
    value: T,
    is: boolean,
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false}
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false}
    }
    return { value: arg, is: !!arg}
}

type HasID = {
   id: number
}

interface copyId extends HasID {
    account: string
}

const processUser = <T extends HasID>(user: T): T => {
    return user
 }

//  console.log(processUser({name: 'emma', id: 2}))

const getUsersProperty = <T extends copyId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

// console.log(getUsersProperty([{id: 1, account: 'emma'}, {id: 3, account: 'ella'}], 'account'))

class StateObject<T> {
    private value: T

    constructor(value: T) {
        this.value = value
    }

    get state(): T {
        return this.value
    }

    set state(data: T) {
        this.value = data
    }
}

const Homeboy = new StateObject('Ricch')
// console.log(Homeboy.state)

const myState = new StateObject<(string | number | boolean)[]>([15]) 
myState.state = [18, 19, 20, 21, 22]
console.log(myState.state)