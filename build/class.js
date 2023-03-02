"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.getAge = () => {
            return `Hello, I'm ${this.age}`;
        };
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
// console.log(Dave.getAge());
// console.log(Dave.music = 'Hip-Hop');
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.getLang = () => `I write ${this.lang}`;
        this.computer = computer;
    }
}
const Sara = new WebDev('Windows', 'Emma', 'Hip-Hop', 19);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const Emma = new Guitarist('Emma', 'football');
// console.log(Emma.play('plays'));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Dan = new Peeps('Dan');
const Sade = new Peeps('Sade');
const Renzy = new Peeps('Renzy');
// console.log(Dan.id)
// console.log(Sade.id)
// console.log(Renzy.id)
// console.log(Peeps.count)
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const Migos = new Bands();
Migos.data = ['Quavo', 'Offset', 'Takeoff'];
console.log(Migos.data);
