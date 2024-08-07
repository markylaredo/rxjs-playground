import { of } from "rxjs";
import { delay } from "rxjs/operators";

const source = of("Hello");
const example = source.pipe(delay(3000));
example.subscribe((val) => console.log(val));
