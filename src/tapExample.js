import { from } from "rxjs";
import { tap } from "rxjs/operators";

const source = from([1, 2, 3, 4, 5]);
const example = source.pipe(tap((val) => console.log(`Before map: ${val}`)));
example.subscribe((val) => console.log(val));
