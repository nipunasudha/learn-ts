import {IPerson} from "./i-person";

export abstract class Person implements IPerson {
    protected name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    public shout(): void {
        console.log("Shouting!")
    }

    public abstract sayWhoYouAre(): void;
}
