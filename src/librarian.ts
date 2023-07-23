import {Person} from "./person";

export class Librarian extends Person {
    public sayWhoYouAre(): void {
        console.log("I'm a librarian. My name is:", this.name)
    }

    public saySalary(): void {
        console.log("My salary is: 30K")
    }
}
