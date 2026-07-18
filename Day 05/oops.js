class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(this.name);
        console.log(this.age);
    }

}

const s1 = new Student("Naleash", 21);

s1.display();