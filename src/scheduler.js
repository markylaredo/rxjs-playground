import { Observable, asyncScheduler } from "rxjs";
import { observeOn } from "rxjs/operators";

/**
 * Creates an Observable that processes an array of asynchronous transactions.
 * Each transaction should be a function that returns a promise.
 *
 * @param {Array<() => Promise<any>>} transactions - Array of transaction functions
 * @returns {Observable<any>} Observable emitting results of transactions
 */
const createDelayedObservable = (transactions) =>
  new Observable((observer) => {
    // Asynchronous function to process transactions
    const processTransactions = async () => {
      for (const transaction of transactions) {
        try {
          const result = await transaction(); // Await the result of the transaction
          observer.next(result); // Emit the result
        } catch (error) {
          observer.error(error); // Emit error and terminate observable
          return; // Stop further processing
        }
      }
      observer.complete(); // Complete the observable when all transactions are processed
    };

    processTransactions();
  }).pipe(observeOn(asyncScheduler)); // Use asyncScheduler to handle async operations

// Example usage
const transactions = [
  // Simulate async transactions
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Transaction 1 completed"), 800)
    ),
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Transaction 2 completed"), 1000)
    ),
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => reject("Transaction 3 failed"), 1200)
    ),
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Transaction 4 completed"), 900)
    ),
];

// Create an observable with the transaction functions
const observable = createDelayedObservable(transactions);

// Log messages before and after subscribing
console.log("Just before subscribe");

// Subscribe to the observable to handle results, errors, and completion
observable.subscribe({
  next(result) {
    console.info(result); // Handle each successful transaction result
  },
  error(err) {
    console.error(`Error occurred: ${err}`); // Handle any error in transactions
  },
  complete() {
    console.log("All transactions have been processed."); // Final completion message
  },
});

console.log("Just after subscribe");

// import { Observable, asyncScheduler } from "rxjs";
// import { observeOn } from "rxjs/operators";

// // Sample dummy array
// const dummyArray = [
//   { m: "apple", delay: 800 },
//   { m: "banana", delay: 800 },
//   { m: "cherry", delay: 800 },
//   { m: "date", delay: 800 },
//   { m: "elderberry", delay: 800 },
//   { m: "fig", delay: 800 },
//   { m: "grape", delay: 800 },
//   { m: "honeydew", delay: 800 },
//   { m: "kiwi", delay: 800 },
//   { m: "lemon", delay: 800 },
//   { m: "mango", delay: 800 },
//   { m: "nectarine", delay: 800 },
//   { m: "orange", delay: 5000 },
//   { m: "papaya", delay: 800 },
//   { m: "quince", delay: 800 },
//   { m: "raspberry", delay: 800 },
//   { m: "strawberry", delay: 800 },
//   { m: "tangerine", delay: 800 },
//   { m: "ugli fruit", delay: 800 },
//   { m: "violet", delay: 3000 },
//   { m: "watermelon", delay: 5000 },
//   { m: "xigua", delay: 3000 },
//   { m: "yellow watermelon", delay: 3000 },
//   { m: "zucchini", delay: 3000 },
// ];

// // Function to create an observable with delayed emission
// const createDelayedObservable = (items, delay) =>
//   new Observable((observer) => {
//     // Emit an initial value
//     observer.next(helloWorld1());

//     // Asynchronous item emission with delay
//     const emitItems = async () => {
//       for (const item of items) {
//         await new Promise((resolve) =>
//           setTimeout(() => {
//             observer.next(item.m);
//             resolve();
//           }, item.delay)
//         );
//       }
//       observer.complete();
//     };

//     emitItems();
//   }).pipe(observeOn(asyncScheduler)); // Use asyncScheduler for handling async operations

// // Example function to return initial value
// const helloWorld1 = () => "hello world 1";

// // Example function to return an alternative value (not used in this example)
// const helloWorld2 = () => "hello world 2";

// // Create an observable with the dummyArray and a delay of 800 milliseconds
// const observable = createDelayedObservable(dummyArray, 800);

// // Log messages before and after subscribing
// console.log("just before subscribe");

// // Subscribe to the observable and handle emissions, errors, and completion
// observable.subscribe({
//   next(value) {
//     console.info(`got value: ${value}`);
//   },
//   error(err) {
//     console.error(`Error occurred: ${err}`);
//   },
//   complete() {
//     console.log("All items have been emitted.");
//   },
// });

// console.log("just after subscribe");

// // import { Observable, asyncScheduler } from "rxjs";
// // import { observeOn } from "rxjs/operators";

// // // Sample dummy array
// // const dummyArray = [
// //   "apple",
// //   "banana",
// //   "cherry",
// //   "date",
// //   "elderberry",
// //   "fig",
// //   "grape",
// //   "honeydew",
// //   "kiwi",
// //   "lemon",
// //   "mango",
// //   "nectarine",
// //   "orange",
// //   "papaya",
// //   "quince",
// //   "raspberry",
// //   "strawberry",
// //   "tangerine",
// //   "ugli fruit",
// //   "violet",
// //   "watermelon",
// //   "xigua",
// //   "yellow watermelon",
// //   "zucchini",
// // ];

// // // Create observable
// // const observable = new Observable((observer) => {
// //   // Emit initial value
// //   observer.next(helloWorld1());

// //   // Use an asynchronous function to handle the delay
// //   const emitItems = async () => {
// //     for (const item of dummyArray) {
// //       await new Promise((resolve) => {
// //         setTimeout(() => {
// //           observer.next(item);
// //           resolve();
// //         }, 800); // 800 milliseconds delay
// //       });
// //     }
// //     observer.complete(); // Complete the observable after all items are emitted
// //   };

// //   emitItems(); // Call the async function to start emitting items
// // }).pipe(observeOn(asyncScheduler)); // Ensure operations are done on the asyncScheduler

// // // Log messages
// // console.log("just before subscribe");

// // // Subscribe to the observable
// // observable.subscribe({
// //   next(x) {
// //     console.info("got value x: " + x);
// //   },
// //   error(err) {
// //     console.error("something wrong occurred: " + err);
// //   },
// //   complete() {
// //     console.log("done");
// //   },
// // });

// // console.log("just after subscribe");

// // // Example functions for demonstration
// // function helloWorld1() {
// //   return "hello world 1";
// // }

// // function helloWorld2() {
// //   return "hello world 2";
// // }

// // // import { Observable, observeOn, asyncScheduler } from "rxjs";

// // // const dummyArray = [
// // //   "apple",
// // //   "banana",
// // //   "cherry",
// // //   "date",
// // //   "elderberry",
// // //   "fig",
// // //   "grape",
// // //   "honeydew",
// // //   "kiwi",
// // //   "lemon",
// // //   "mango",
// // //   "nectarine",
// // //   "orange",
// // //   "papaya",
// // //   "quince",
// // //   "raspberry",
// // //   "strawberry",
// // //   "tangerine",
// // //   "ugli fruit",
// // //   "violet",
// // //   "watermelon",
// // //   "xigua",
// // //   "yellow watermelon",
// // //   "zucchini",
// // // ];

// // // const observable = new Observable((observer) => {
// // //   observer.next(helloWorld1());
// // //   dummyArray.map(async (a) => {
// // //     await new Promise((resolve) => {
// // //       setTimeout((_) => {
// // //         observer.next(a);
// // //         resolve(a);
// // //       }, 1000);
// // //     });
// // //   });

// // //   observer.complete();
// // // }).pipe(observeOn(asyncScheduler));

// // // console.log("just before subscribe");

// // // observable.subscribe({
// // //   next(x) {
// // //     console.info("got value x " + x);
// // //   },
// // //   error(err) {
// // //     console.error("something wrong occurred: " + err);
// // //   },
// // //   complete() {
// // //     console.log("done");
// // //   },
// // // });
// // // console.log("just after subscribe");

// // // function helloWorld1() {
// // //   return "hello world 1";
// // // }

// // // function helloWorld2() {
// // //   return "hello world 2";
// // // }
