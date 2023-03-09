"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
// console.log(isObj({name: 'emma'}))
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    else if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
//  console.log(processUser({name: 'emma', id: 2}))
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
// console.log(getUsersProperty([{id: 1, account: 'emma'}, {id: 3, account: 'ella'}], 'account'))
class StateObject {
    constructor(value) {
        this.value = value;
    }
    get state() {
        return this.value;
    }
    set state(data) {
        this.value = data;
    }
}
const Homeboy = new StateObject('Ricch');
// console.log(Homeboy.state)
const myState = new StateObject([15]);
myState.state = [18, 19, 20, 21, 22];
console.log(myState.state);
