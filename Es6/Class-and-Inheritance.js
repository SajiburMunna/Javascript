//in es5 constructor is class in es6!
class PersonClass {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  static dateOfBirth() {
    console.log(`${this.name} born in ${2018 - this.age}`);
  }
}

class TeacherClass extends PersonClass {
  constructor(name, age, job, subject) {
    super(name, age, job);
    this.subject = subject;
  }
}

const teacher = new TeacherClass("sojib", 21, "teacher", "javascript");
console.log(teacher.name);
console.log(teacher.dateOfBirth()); //---now can not access from personclass bcz static key word!

const person = new PersonClass("sojib", 23, "student");
console.log(person.dateOfBirth());
