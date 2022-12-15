// create class
class Student {

    // create constructor to assign property
    constructor(name) {
        this.fullname = name
    }
}

// create obejct of the class: constructor function is automatically called when obj is initialised
const obj = new Student("Qozeem Odeniran");

// output fullname
console.log(obj.fullname);