// create class
class Student {

    // create constructor and initialise property
    constructor(name) {
        this.myname = name
    }

    // create own method and return something
    introduce() {
        return 'My name is ' + this.myname;
    }
}
// create object of the class
const obj = new Student("Qozeem Odeniran");

// call own method using object
console.log(obj.introduce());