import {IPerson} from "./i-person";
import {myStudent1, myTeacher1} from "./data";

const allPeople: IPerson[] = [myStudent1, myTeacher1]
export const firstTeacher = allPeople[1];

(firstTeacher as IPerson).sayWhoYouAre()


