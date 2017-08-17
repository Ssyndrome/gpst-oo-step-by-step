module.exports = class Class {
    constructor(number){
        this.number = number;
        this.members = [];
        this.teachers = [];
    }
    appendMember(student){
        this.members.push(student);
        this.teachers.map((teacher) => {teacher.notifyStudentAppended = () => {
            return (`${student.name} has joined Class ${this.number}`);
        }
        });
    }
    assignLeader(student){
        if(this.members.includes(student)){
            student.introduce = function () {
                return `My name is ${student.name}. I am ${student.age} years old. I am a Student. I am Leader of Class ${this.clazz.number}.`;
            };
            this.teachers.map((teacher) => {teacher.notifyLeaderAssigned = () => {
                return (`${student.name} become Leader of Class ${this.number}`);
            }
            });
            this.leader = student;
            return `Assign team leader successfully.`;
        }else{
            student.introduce = function () {
                return `My name is ${student.name}. I am ${student.age} years old. I am a Student. I haven't been allowed to join Class.`;
            };
            return `It is not one of us.`;
        }
    }
    hasStudent(student){
        if(this.members.includes(student)){
            return true;
        }else{
            return false;
        }
    }
};