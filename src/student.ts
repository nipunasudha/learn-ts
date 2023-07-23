import {Person} from "./person";

export class Student extends Person {
    public sayWhoYouAre(): void {
        console.log("I'm a student. My name is:", this.name)
    }
}
