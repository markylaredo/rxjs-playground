import { combineLatest, interval } from "rxjs";
import { map } from "rxjs/operators";

const sourceOne = interval(1000);
const sourceTwo = interval(2000);
const example = combineLatest([sourceOne, sourceTwo]).pipe(
  map(([val1, val2]) => {
    return `Source One: ${val1}, Source Two: ${val2}`;
  })
);
example.subscribe((val) => console.log(val));
