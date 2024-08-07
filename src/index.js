import { of } from "rxjs";
import { map } from "rxjs/operators";

// Create an observable from an array of values
const source$ = of(1, 2, 3, 4, 5);

// Use the map operator to transform the values
const transformed$ = source$.pipe(map((value) => value * 10));

// Subscribe to the observable to get the values
transformed$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error("Error:", err),
  complete: () => console.log("Completed"),
});
