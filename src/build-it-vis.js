class Person {
    constructor(name = "Anon", age = 0) {
        this.name = name;
        this.age = age
    }
    getGreeting() {
        return `Hello ${this.name}`
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

        if(this.hasMajor()){
            
        }
    }
}

const me = new Student("aaron", 20, "cs")

console.log(me.getDesc());