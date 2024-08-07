import { interval } from "rxjs";

const source = interval(1000);
source.subscribe((val) => console.log(val));
