import {Person} from "./person";

export class Teacher extends Person {
    public sayWhoYouAre(): void {
        console.log("I'm a teacher. My name is:", this.name)
    }

    public saySalary(): void {
        console.log("My salary is: 30K")
    }
}
