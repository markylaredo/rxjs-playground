import { fromEvent, interval } from "rxjs";
import { switchMap } from "rxjs/operators";

const source = fromEvent(document, "click");
const example = source.pipe(switchMap(() => interval(1000)));
example.subscribe((val) => console.log(val));
