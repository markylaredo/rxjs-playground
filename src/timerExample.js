import { timer } from "rxjs";

const source = timer(3000, 1000);
source.subscribe((val) => console.log(val));
