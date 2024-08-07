import { merge, interval } from "rxjs";

const first = interval(2500);
const second = interval(2000);
const example = merge(first, second);
example.subscribe((val) => console.log(val));
