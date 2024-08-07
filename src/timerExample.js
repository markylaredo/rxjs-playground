import { timer } from "rxjs";
import { map, take } from "rxjs/operators";
// const source = timer(0, 10);
// source.subscribe((val) => console.log(val));

// Create a timer that emits a value after 3000 milliseconds and then completes
// const timer$ = timer(3000);
const timer$ = timer(3000).pipe(
  map((value) => `Transformed value: ${value}`),
  take(1)
);

// First subscriber
timer$.subscribe({
  next: (value) => console.log("Subscriber 1 received value:", value),
  complete: () => console.log("Subscriber 1 completed"),
});

// Second subscriber
timer$.subscribe({
  next: (value) => console.log("Subscriber 2 received value:", value),
  complete: () => console.log("Subscriber 2 completed"),
});

console.log("event registered");
