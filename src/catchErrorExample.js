import { of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

const source = throwError("This is an error!");
const example = source.pipe(catchError((val) => of(`I caught: ${val}`)));
example.subscribe((val) => console.log(val));
