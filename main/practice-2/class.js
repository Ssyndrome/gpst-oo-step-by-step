// Write your code here
module.exports = class Class {
    constructor(number){
        this.number = number;
    }
    assignLeader(student){
        student.introduce = function () {
            return `My name is ${student.name}. I am ${student.age} years old. I am a Student. I am Leader of Class ${this.clazz.number}.`;
        }
        this.leader = student;
    }
}