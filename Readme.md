List of examples for various RxJS functions, organized by filename. This list covers many of the commonly used RxJS functions but is not exhaustive.

### Creation Operators
**`fromExample.js`**
```javascript
import { from } from 'rxjs';

const arraySource = from([1, 2, 3, 4, 5]);
arraySource.subscribe(val => console.log(val));
```

**`ofExample.js`**
```javascript
import { of } from 'rxjs';

const source = of(1, 2, 3, 4, 5);
source.subscribe(val => console.log(val));
```

**`intervalExample.js`**
```javascript
import { interval } from 'rxjs';

const source = interval(1000);
source.subscribe(val => console.log(val));
```

**`timerExample.js`**
```javascript
import { timer } from 'rxjs';

const source = timer(3000, 1000);
source.subscribe(val => console.log(val));
```

**`fromEventExample.js`**
```javascript
import { fromEvent } from 'rxjs';

const source = fromEvent(document, 'click');
source.subscribe(event => console.log(event));
```

### Transformation Operators
**`mapExample.js`**
```javascript
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5]);
const example = source.pipe(map(val => val * 10));
example.subscribe(val => console.log(val));
```

**`filterExample.js`**
```javascript
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5]);
const example = source.pipe(filter(val => val % 2 === 0));
example.subscribe(val => console.log(val));
```

**`switchMapExample.js`**
```javascript
import { fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const source = fromEvent(document, 'click');
const example = source.pipe(switchMap(() => interval(1000)));
example.subscribe(val => console.log(val));
```

### Combination Operators
**`mergeExample.js`**
```javascript
import { merge, interval } from 'rxjs';

const first = interval(2500);
const second = interval(2000);
const example = merge(first, second);
example.subscribe(val => console.log(val));
```

**`concatExample.js`**
```javascript
import { concat, of } from 'rxjs';

const sourceOne = of(1, 2, 3);
const sourceTwo = of(4, 5, 6);
const example = concat(sourceOne, sourceTwo);
example.subscribe(val => console.log(val));
```

**`combineLatestExample.js`**
```javascript
import { combineLatest, interval } from 'rxjs';
import { map } from 'rxjs/operators';

const sourceOne = interval(1000);
const sourceTwo = interval(2000);
const example = combineLatest([sourceOne, sourceTwo]).pipe(
  map(([val1, val2]) => {
    return `Source One: ${val1}, Source Two: ${val2}`;
  })
);
example.subscribe(val => console.log(val));
```

### Utility Operators
**`tapExample.js`**
```javascript
import { from } from 'rxjs';
import { tap } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5]);
const example = source.pipe(tap(val => console.log(`Before map: ${val}`)));
example.subscribe(val => console.log(val));
```

**`delayExample.js`**
```javascript
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

const source = of('Hello');
const example = source.pipe(delay(3000));
example.subscribe(val => console.log(val));
```

**`takeExample.js`**
```javascript
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const source = interval(1000);
const example = source.pipe(take(5));
example.subscribe(val => console.log(val));
```

**`catchErrorExample.js`**
```javascript
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const source = throwError('This is an error!');
const example = source.pipe(catchError(val => of(`I caught: ${val}`)));
example.subscribe(val => console.log(val));
```

This should give you a broad range of examples to get started with RxJS. Feel free to expand on this list based on your specific use cases and the functions you need.