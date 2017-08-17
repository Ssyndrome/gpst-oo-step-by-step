const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name, age, clazzes){
        super(name, age);
        this.clazzes = clazzes;
    }
    introduce(){
        let message = super.introduce()+` I am a Teacher.`;
        this.clazzes.length === 0?message += ` I teach No Class.`:message += ` I teach Class ${this.clazzes.map((clazz) => {return clazz.number})}.`;
        return message;
    }
};