class Coder {

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Typescript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge = () => {
        return `Hello, I'm ${this.age}`
    }

}

const Dave = new Coder('Dave', 'Rock', 42)
// console.log(Dave.getAge());
// console.log(Dave.music = 'Hip-Hop');

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    )
    {
        super(name, music, age)
        this.computer = computer
    }

    getLang = () => `I write ${this.lang}`
}

const Sara = new WebDev('Windows', 'Emma', 'Hip-Hop', 19 )
// console.log(Sara.getLang()) 

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string
    
    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
        
    }

    play(action: string) {
       return `${this.name} ${action} ${this.instrument}` 
    } 
} 

const Emma = new Guitarist('Emma', 'football')
// console.log(Emma.play('plays'));

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }

}

const Dan = new Peeps('Dan')
const Sade = new Peeps('Sade')
const Renzy = new Peeps('Renzy')

// console.log(Dan.id)
// console.log(Sade.id)
// console.log(Renzy.id)whtwhw
// console.log(Peeps.count)

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

const Migos = new Bands()
Migos.data = ['Quavo', 'Offset', 'Takeoff']
console.log(Migos.data)
