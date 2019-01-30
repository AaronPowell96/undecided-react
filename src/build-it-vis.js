class Person {
    constructor(name = "Anon", age = 0) {
        this.name = name;
        this.age = age
    }
    getGreeting() {
        return `Hello I am ${this.name}`
    }
    getDesc() {
        return `${this.name} is ${this.age} year${this.age === 1 ? `` : `s`} old.`
    }
}

class Student extends Person {
    constructor(name, age, className) {
        super();
        this.className = className;
    }
    hasMajor() {
        return !!this.className
    }
    getDesc() {
        let description = super.getDesc();

        if (this.hasMajor()) {
            description += ` Their major is ${this.className}`
        }
        return description
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super();
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greet = super.getGreeting();
        if (this.homeLocation) {
            greet += `, I am visiting from ${this.homeLocation}`
        }
        return greet;
    }
}

const me = new Student("aaron", 20, "cs")
const me1 = new Traveller("aaron", 20)

console.log(me.getGreeting());
console.log(me1.getGreeting());